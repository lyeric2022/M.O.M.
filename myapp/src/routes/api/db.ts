import { MongoClient } from "mongodb";
export let id = "";
import { SECRET_URI } from "$env/static/private";

const uri = SECRET_URI;

export async function createUser(username: string, password: string) {
  const client = new MongoClient(uri);
  await client.connect();
  console.log("Connected");

  const dbName = "mom";
  const db = client.db(dbName);
  const collectionName = "users";
  const collection = db.collection(collectionName);

  try {
    await collection.insertOne({ _username: username, _password: password });
    console.log(`Created user: ${username} : ${password}`);
  } catch (err) {
    console.log(`Error creating user: ${username}`);
    throw err;
  }

  const user = await collection.findOne({ _username: username });
  id = JSON.stringify(user?._id);

  client.close();
}
