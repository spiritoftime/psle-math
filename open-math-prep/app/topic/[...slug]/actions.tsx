"use server";
import { LectureNode } from "@/app/domain/lectureNodes";
import { getLectureProgressesFromSupabase } from "@/infrastructure/lectureProgress/api";
import { createClient } from "@/utils/supabase/server";
export async function markCompletedLectureLoggedIn(
  lectureNodes: LectureNode[]
) {
  const supabase = createClient();

  try {
    const filterBy = lectureNodes.map((lectureNode) => lectureNode.title);
    const { data: lectureProgresses, error: fetchError } =
      await getLectureProgressesFromSupabase(filterBy);

    if (fetchError) throw new Error(`Fetch error: ${fetchError.message}`);

    const lectureNodesToInsert = [];
    const lectureNodesToUpdate = [];

    for (const lectureNode of lectureNodes) {
      const lectureProgress =
        lectureProgresses?.find((lp) => lp.title === lectureNode.title) ?? null;
      if (lectureProgress) {
        lectureNodesToUpdate.push({ ...lectureNode, id: lectureProgress.id });
      } else {
        lectureNodesToInsert.push(lectureNode);
      }
    }

    if (lectureNodesToInsert.length > 0) {
      const { error: insertError } = await supabase
        .from("lectureprogress")
        .insert(lectureNodesToInsert);
      if (insertError) throw new Error(`Insert error: ${insertError.message}`);
    }

    if (lectureNodesToUpdate.length > 0) {
      const { error: updateError } = await supabase
        .from("lectureprogress")
        .upsert(lectureNodesToUpdate);
      if (updateError) throw new Error(`Update error: ${updateError.message}`);
    }

    return null;
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message };
    } else {
      return { error: "An unknown error occurred" };
    }
  }
}
