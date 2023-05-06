import { MongoClient } from "mongodb";
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

export async function createDiary(input: string) {
  await client.connect();
  let score = await SentimentScore();
  try {
    await diaryCollection.insertOne({
      _diary: diary,
      _date: new Date().toLocaleDateString("en-US"),
      _sentiment: score,
    });
  } catch (err) {
    throw err;
  }

  client.close();
}

export async function getUserId(username: string): Promise<String> {
  await client.connect();
  console.log("Connected");

  const user = await userCollection.findOne({ _username: username });
  const id = JSON.stringify(user?._id);
  console.log(`This is the ID for user ${username}: ${id}`);

  client.close();
  return id;
}

export async function getUsername(username: string): Promise<String> {
  await client.connect();

  const user = await userCollection.findOne({ _username: username });
  const name = JSON.stringify(user?._username);
  console.log(name);

  client.close();

  return name;
}
