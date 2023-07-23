import { json } from "@sveltejs/kit";
import { getAllInfo } from "../db";

export async function GET(request: any): Promise<Response> {
  const urlParams = new URLSearchParams(request.url.search);
  const user_id: any = urlParams.get("diaryID");

  try {
    const diaries = await getAllInfo(user_id);
    console.log(diaries);
    return json(diaries);
  } catch (error) {
    return json({ error: "Failed to fetch diaries" });
  }
}
