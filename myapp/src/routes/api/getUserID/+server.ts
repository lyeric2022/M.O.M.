import { _getUserID } from "../sign/+server";
import { RequestEvent } from "@sveltejs/kit";

export async function GET(username: string): Promise<String> {
  console.log(username);
  console.log(_getUserID(username));
  return _getUserID(username);
}
