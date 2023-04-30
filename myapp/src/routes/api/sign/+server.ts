// import { user } from '../../../../lib/db';

// /** @type {import('./$types').Actions} */

// export const actions = {
//   register: async ({ event, request }) => {
//     const data = await request.formData();
//     const username = data.get('username');

//     await user(username);

//     return { success: true };
//   },
// };

// import { createUser } from "../../../api/db";

// export async function POST({ request }: any) {
//   const data = await request.formData();
//   const username = data.get("username");

//   createUser(username);
//   console.log("User sent to backend~!");
// }

import type { RequestEvent } from "@sveltejs/kit";
import { createUser } from "../db";
import { redirect } from "@sveltejs/kit";

export async function POST({
  request,
}: {
  request: RequestEvent["request"];
}): Promise<Response> {
  const data = await request.json();
  console.log(data);
  const db = await createUser(data.username, data.password);

  return new Response(String(JSON.stringify({ status: "ok" })));
}
