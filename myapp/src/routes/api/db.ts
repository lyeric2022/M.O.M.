import { MongoClient, ObjectId } from "mongodb";
export let id: any;
import { SECRET_URI } from "$env/static/private";
import mongoose from "mongoose";
import DiaryInput from "../components/Diary/DiaryInput.svelte";

const uri = SECRET_URI;
const client = new MongoClient(uri);
const dbName = "mom";
const user_collection = "users";
const diary_collection = "diary";

async function connectToDB() {
  // Connects to database

  try {
    await client.connect();
  } catch (e) {
    throw e;
  }
}

export async function createUser(username: string, password: string) {
  await connectToDB();

  try {
    const userCollection = client.db(dbName).collection(user_collection);
    await userCollection.insertOne({
      _username: username,
      _password: password,
    });
  } catch (e) {
    throw e;
  } finally {
    client.close();
  }

  client.close();
}

export async function createDiary(
  input: string,
  score: string,
  image: string,
  id: string
) {
  await connectToDB();

  try {
    const diaryCollection = client.db(dbName).collection(diary_collection);
    await diaryCollection.insertOne({
      _diary: input,
      _date: new Date().toLocaleDateString("en-US"),
      _sentiment: score,
      _cat_img: image,
      _user_id_connection: id,
    });
  } catch (e) {
    throw e;
  } finally {
    client.close();
  }
}

export async function getUserId(username: string): Promise<string> {
  await connectToDB();

  try {
    const userCollection = client.db(dbName).collection(user_collection);
    const user = await userCollection.findOne({ _username: username });
    const userId = user ? user._id.toString() : "";
    return userId;
  } catch (e) {
    throw e;
  } finally {
    client.close();
  }
}

export async function getUsername(id: string): Promise<String> {
  await connectToDB();
  try {
    const userCollection = client.db(dbName).collection(user_collection);
    const userData = await userCollection.findOne({ _id: new ObjectId(id) });
    const username = userData?._username ?? "";

    return username;
  } catch (e) {
    throw e;
  } finally {
    client.close();
  }
}

export async function getImageURL(id: string): Promise<String> {
  await connectToDB();

  try {
    const userCollection = client.db(dbName).collection(user_collection);
    const userData = await userCollection.findOne({ _id: new ObjectId(id) });
    const url = userData?._cat_img;

    return url;
  } catch (e) {
    throw e;
  } finally {
    client.close();
  }
}

export async function getAllInfo(user_id: string): Promise<any> {
  await connectToDB();

  try {
    const diaryCollection = client.db(dbName).collection(diary_collection);
    const diariesCursor = diaryCollection.find({
      _user_id_connection: user_id,
    });

    // TODO - Fix fetch
    const diaries = await diariesCursor.toArray();

    return diaries;
  } catch (e) {
    throw e;
  } finally {
    client.close();
  }
}
