"use server";
import { LectureNode } from "@/app/domain/lectureNodes";
import { getLectureProgresses } from "@/infrastructure/lectureProgress/api";
import { createClient } from "@/utils/supabase/server";
// use when guaranteed to be logged in. non logged in function is client side as it needs to use localstorage.
export async function markCompletedLecture(lectureNodes: LectureNode[]) {
  const supabase = createClient();
  const filterBy = lectureNodes.map((lectureNode) => lectureNode.title);
  const lectureProgresses = await getLectureProgresses(filterBy);
  console.log(lectureProgresses, "lectureProgresses");
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
console.log(lectureNodesToInsert, "lectureNodesToInsert");
  if (lectureNodesToInsert.length > 0) {
    const { error } = await supabase
      .from("lectureprogress")
      .insert(lectureNodesToInsert);
    console.log(error, "insert error");
  }
  if (lectureNodesToUpdate.length > 0) {
    const { data, error } = await supabase
      .from("lectureprogress")
      .upsert(lectureNodesToUpdate)
      .select();
    console.log(data, error, "update error");
  }
  console.log("done");
}
