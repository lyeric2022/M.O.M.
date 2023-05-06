import { getUserId } from "../db";
import { RequestEvent } from "@sveltejs/kit";

export async function GET(username: string): Promise<String> {
  console.log(username);
  console.log(getUserId(username));
  return getUserId(username);
}
