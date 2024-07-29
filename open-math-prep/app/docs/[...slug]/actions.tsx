"use server";
import { getLectureProgresses } from "@/infrastructure/lectureProgress/api";
import { createClient } from "@/utils/supabase/server";
// use when guaranteed to be logged in. non logged in function is client side as it needs to use localstorage.
export async function markCompletedLecture(filterBy: string[] = []) {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  if (!data || !data.user) return;
  const lectureProgresses = await getLectureProgresses(filterBy);
  console.log(lectureProgresses, "lectureProgresses");
}
