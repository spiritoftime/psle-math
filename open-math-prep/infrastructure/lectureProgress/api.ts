"use server";
import { createClient } from "@/utils/supabase/server";
import { buildSupabaseFilter } from "@/utils/utils";

export async function getLectureProgressesFromSupabase(filterBy: string[]) {
  const supabase = createClient();
  const supabaseFilter = buildSupabaseFilter(filterBy);
  const { data, error } =
    filterBy.length > 0
      ? await supabase
          .from("lectureprogress")
          .select("*")
          .filter("title", "in", supabaseFilter)
      : await supabase.from("lectureprogress").select("*");
  return { data, error };
}
