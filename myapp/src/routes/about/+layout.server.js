// /* global use, db */
// // MongoDB Playground
// // To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// // Make sure you are connected to enable completions and to be able to run a playground.
// // Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// // The result of the last command run in a playground is shown on the results panel.
// // By default the first 20 documents will be returned with a cursor.
// // Use 'console.log()' to print to the debug output.
// // For more documentation on playgrounds please refer to
// // https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

import { MongoClient } from 'mongodb';
// import { SECRET_URI } from '../../lib/env';
import { returnURL } from '../../page';

let uri =
  'mongodb+srv://boushrab04:vahdLAsDlMofsGCv@mom.it96sfn.mongodb.net/mom';
export async function load({}) {
  const client = new MongoClient(uri);
  let errors = {
    error: false,
    errorDesc: '',
  };

  let urlList = [];

  try {
    await client.connect();
  } catch (error) {
    errors.error = true;
    errors.errorDesc = error.message ?? 'Error connecting!';
  }

  const database = 'mom';
  const collection = 'users';
  const db = client.db(database);
  const cn = db.collection(collection);

  try {
    urlList = await returnURL(cn);
    console.log(`This is the url list below this:`);
    console.log(urlList);
  } catch (error) {
    errors.error = true;
    errors.errorDesc = error.message ?? 'Error retrieving the URL list';
  }

  return { errors, urlList };
}

// import { saveToMongo } from "../../lib/db";

// export async function _POST(request: any) {
//   const data = await request.body();
//   const email = data.get("email");
//   await saveToMongo(email);
//   return {
//     status: 200,
//     body: { message: "Email saved!" },
//   };
// }
// async function saveToMongo(email) {
//   try {
//     await client.connect();
//     const database = client.db('mom');
//     const collection = database.collection('users');
//     const result = await collection.insertOne({ email: email });
//     console.log(`Email saved with id: ${result}`);
//   } catch (e) {
//     console.log(e);
//   } finally {
//     await client.close();
//   }
// }
