import { MongoClient, ObjectId } from "mongodb";
import { SentimentScore } from "../home/calculation";
import { redirect } from "@sveltejs/kit";
import { page } from "$app/stores";

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

export async function createDiary(
  input: string,
  score: string,
  image: string,
  id: string
) {
  await client.connect();
  console.log(`the object id for db.ts is ${id}`);
  try {
    await diaryCollection.insertOne({
      _id: new ObjectId(id),
      _diary: input,
      _date: new Date().toLocaleDateString("en-US"),
      _sentiment: score,
      _cat_img: image,
    });
  } catch (err) {
    throw err;
  }
  console.log(diaryCollection);
  console.log("Sucessfully inserted diary.");
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

export async function getImageURL(id: string): Promise<String> {
  await client.connect();

  const user = await userCollection.find({ _id: new ObjectId(id) }).toArray();
  const url = user[0]._cat_img;

  client.close();

  return url;
}

export async function getAllInfo(id: string): Promise<Array<Object>> {
  await client.connect();
  console.log(id);
  const objectId = new ObjectId(id); // Convert the id to a valid ObjectId
  console.log(objectId);

  return [{}];
}
