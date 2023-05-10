// export async function GET({
//   params,
// }: RequestEvent): Promise<{ body: string; status: number }> {
//   const { username }: any = params;
//   const USER_ID = await getUserId(username);
//   console.log(`(In +server.ts => getUSERID) This is the ID ${USER_ID}`);
//   return {
//     body: JSON.stringify({ USER_ID }),
//     status: 200,
//   };
// }

import { json } from "@sveltejs/kit";
import { getUserId } from "../db";

export async function GET(request: any): Promise<Response> {
  const urlParams = new URLSearchParams(request.url.search);
  const username: any = urlParams.get("username");

  console.log("Calling getUserId...");
  const USER_ID = await getUserId(username);
  console.log("Finished calling getUserId.");

  console.log(`From /id endpoint => USER_ID: ${USER_ID}`);
  return json(USER_ID);
}
