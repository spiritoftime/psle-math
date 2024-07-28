import { createClient } from "@/utils/supabase/server";
import { buildSupabaseFilter } from "@/utils/utils";

export async function getLectureProgresses(filterBy: string[]) {
  const supabase = createClient();
  const supabaseFilter = buildSupabaseFilter(filterBy);
  const { data, error } =
    filterBy.length > 0
      ? await supabase
          .from("lectureprogress")
          .select("*")
          .filter("name", "in", supabaseFilter)
      : await supabase.from("lectureprogress").select("*");
  return { data, error };
}
