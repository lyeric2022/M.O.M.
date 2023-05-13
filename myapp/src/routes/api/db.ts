import { MongoClient, ObjectId } from "mongodb";
import { SentimentScore } from "../home/calculation";
import { redirect } from "@sveltejs/kit";
export let id: any;
import { SECRET_URI } from "$env/static/private";

const uri = SECRET_URI;
const client = new MongoClient(uri);
const dbName = "mom";
const db = client.db(dbName);
const user = "users";
const userCollection = db.collection(user);
const diary = "diary";
const diaryCollection = db.collection(diary);

export async function createUser(username: string, password: string) {
  await client.connect();
  console.log("Connected");

  try {
    await userCollection.insertOne({
      _username: username,
      _password: password,
    });
    console.log(`Created user: ${username} : ${password}`);
  } catch (err) {
    console.log(`Error creating user: ${username}`);
    throw err;
  }

  const user = await userCollection.findOne({ _username: username });
  id = JSON.stringify(user?._id);
  console.log(`THis is you rid`, { id });

  client.close();
}

export async function createDiary(input: string, score: string) {
  await client.connect();
  try {
    await diaryCollection.insertOne({
      _diary: input,
      _date: new Date().toLocaleDateString("en-US"),
      _sentiment: score,
      // TODO: Get the ID from the URL PARAMS but set it up
    });
  } catch (err) {
    throw err;
  }

  client.close();
}

export async function getUserId(username: string): Promise<string> {
  await client.connect();

  const user = await userCollection.findOne({ _username: username });
  const userId = user ? user._id.toString() : "";

  await client.close();

  return userId;
}

export async function getUsername(id: string): Promise<String> {
  await client.connect();

  const user = await userCollection.find({ _id: new ObjectId(id) }).toArray();
  const name = JSON.stringify(user.at(0)?._username);
  console.log(name);

  client.close();

  return name;
}
