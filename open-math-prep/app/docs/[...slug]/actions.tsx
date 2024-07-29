"use server";
import { LectureNode } from "@/app/domain/lectureNodes";
import { getLectureProgressesFromSupabase } from "@/infrastructure/lectureProgress/api";
import { createClient } from "@/utils/supabase/server";
export async function markCompletedLectureLoggedIn(lectureNodes: LectureNode[]) {
  const supabase = createClient();
  const filterBy = lectureNodes.map((lectureNode) => lectureNode.title);
  const lectureProgresses = await getLectureProgressesFromSupabase(filterBy);
  const lectureNodesToInsert = [];
  const lectureNodesToUpdate = [];

  for (const lectureNode of lectureNodes) {
    const lectureProgress =
      lectureProgresses.data?.find((lp) => lp.title === lectureNode.title) ??
      null;
    if (lectureProgress) {
      lectureNodesToUpdate.push({ ...lectureNode, id: lectureProgress.id });
    } else {
      lectureNodesToInsert.push(lectureNode);
    }
  }

  let insertError = null;
  let updateError = null;

  if (lectureNodesToInsert.length > 0) {
    const { error } = await supabase
      .from("lectureprogress")
      .insert(lectureNodesToInsert);
    insertError = error;
  }

  if (lectureNodesToUpdate.length > 0) {
    const { error } = await supabase
      .from("lectureprogress")
      .upsert(lectureNodesToUpdate);
    updateError = error;
  }

  if (insertError || updateError) {
    return { insertError, updateError };
  }

  return null;
}
