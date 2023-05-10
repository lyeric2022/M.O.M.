import { json } from "@sveltejs/kit";
import { getUsername } from "../db";

export async function GET(request: any): Promise<Response> {
  const urlParams = new URLSearchParams(request.url.search);
  const id: any = urlParams.get("id");

  console.log("Calling getUsername...");
  const USERNAME = await getUsername(id);
  console.log("Finished calling getUsername.");

  console.log(`From /id endpoint => USERNAME: ${USERNAME}`);
  return json(USERNAME);
}
