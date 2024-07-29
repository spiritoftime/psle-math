import { getLectureProgressesFromSupabase } from "@/infrastructure/lectureProgress/api";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title");
  if (title) {
    const { data, error } = await getLectureProgressesFromSupabase([title]);
    return NextResponse.json({ data, error });
  }
  return NextResponse.json({ error: "Title is required" });
}
