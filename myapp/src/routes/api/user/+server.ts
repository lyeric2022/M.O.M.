import { json } from "@sveltejs/kit";
import { getUsername } from "../db";

export async function GET(request: any): Promise<Response> {
  console.log(request);
  const urlParams = new URLSearchParams(request.url.search);
  const id: any = urlParams.get("id");
  console.log(`The GET request from user +server.ts is ${id}`);
  const USERNAME = await getUsername(id);
  console.log(`The GET request from user +server.ts is ${USERNAME}`);

  return json(USERNAME);
}
