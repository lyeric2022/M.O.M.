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
import { createUser } from "../../api/db";

export const POST = async (request: Request) => {
  const { body }: any = request;
  const db = await createUser(body);
  return {
    status: 200,
    body: body.insertedId,
  };
};
