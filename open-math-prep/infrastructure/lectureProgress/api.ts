"server only";
import { createClient } from "@/utils/supabase/server";

export async function getLectureProgressesFromSupabase(filterBy: string[]) {
  const supabase = createClient();

  const { data, error } =
    filterBy.length > 0
      ? await supabase.from("lectureprogress").select("*").in("title", filterBy)
      : await supabase.from("lectureprogress").select("*");
  return { data, error };
}
