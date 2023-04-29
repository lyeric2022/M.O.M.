import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://boushrab04:vahdLAsDlMofsGCv@mom.it96sfn.mongodb.net/mom";

export async function createUser(username: string) {
  const client = new MongoClient(uri);
  await client.connect();
  console.log("Connected");

  const dbName = "mom";
  const db = client.db(dbName);
  const collectionName = "users";
  const collection = db.collection(collectionName);

  try {
    await collection.insertOne({ username: username });
    console.log(`Created user: ${username}`);
  } catch (err) {
    console.log(`Error creating user: ${username}`);
    throw err;
  } finally {
    client.close();
  }
}
