import { json } from "@sveltejs/kit";
import { getAllInfo } from "../db";

export async function GET(request: any): Promise<Response> {
  const USER_ID = await getAllInfo(request);

  return json(USER_ID);
}
