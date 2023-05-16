import { json } from "@sveltejs/kit";
import { getUsername } from "../db";

export async function GET(request: any): Promise<Response> {
  const urlParams = new URLSearchParams(request.url.search);
  const id: any = urlParams.get("id");

  const USERNAME = await getUsername(id);

  return json(USERNAME);
}
