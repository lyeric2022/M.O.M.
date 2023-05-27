/*
 * a GETTER
- Find the posts in the collection diary that is the same as that object id from /home/{ID}
- For each document, push back into an array of objects
- Return that array of objects




-- In my .svelte page --
- fetch this file
- turn the response to an object
- a for loop for each thingy
 */

// import { getAllInfo } from "../../api/db";
// import { json } from "@sveltejs/kit";
// import { page } from "$app/stores";

// export async function GET(id: any): Promise<any> {
//   const urlParams = new URLSearchParams(id.url.search);
//   const userID: any = urlParams.get("diaryID");
//   console.log(userID);
//   const allInfo = await getAllInfo(userID);
//   console.log(JSON.stringify(allInfo));
//   return json(allInfo);
// }

// /** @type {import('./$types').PageLoad} */

// // TODO- LOAD DIAIRIES THROUGH FILERTING USERID
// import { getAllInfo } from "../../api/db";
// import { json } from "@sveltejs/kit";
// export async function load({ params, url }: any): Promise<any> {
//   const { diaryID } = params;
//   const INFO = await getAllInfo(diaryID);
//   console.log({ INFO });

//   return { INFO };
// }
