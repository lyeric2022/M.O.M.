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
