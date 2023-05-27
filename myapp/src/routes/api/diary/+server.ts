/*
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

  const USER_ID = await getUserId(data.username);
  console.log(`THE USER ID ${USER_ID}`);
  return new Response(String(JSON.stringify({ status: 200 })));

  // throw redirect(307, `/home/${USER_ID}`);
  // return new Response(JSON.stringify(USER_ID));
  // sveltekit-advancingrouting
}
// */

import type { RequestEvent } from "@sveltejs/kit";
import { createDiary } from "../db";

export async function POST({
  request,
}: {
  request: RequestEvent["request"];
}): Promise<Response> {
  //input
  const data = await request.json();

  console.log(`Data in +Server.ts`, data);
  console.log(data.diaryID);
  const db = await createDiary(
    data.input,
    data.sentiment,
    data.img,
    data.diaryID
  );

  return new Response(String(JSON.stringify({ status: 200 })));
}
