import type { RequestEvent } from "@sveltejs/kit";
import { createUser, getUserId } from "../db";

export async function POST({
  request,
}: {
  request: RequestEvent["request"];
}): Promise<Response> {
  const data = await request.json();
  console.log(data);
  const db = await createUser(data.username, data.password);
  return new Response(String(JSON.stringify({ status: 200 })));

  // throw redirect(307, `/home/${USER_ID}`);
  // return new Response(JSON.stringify(USER_ID));
  // sveltekit-advancingrouting
}

// export async function _getUserID({
//   request,
// }: {
//   request: RequestEvent["request"];
// }): Promise<String> {
//   const data = await request.json();
//   const USER_ID = await getUserId(data.username);
//   return USER_ID;
// }
