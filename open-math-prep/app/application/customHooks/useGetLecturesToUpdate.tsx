"use client";

import { LectureNode, LectureStructure } from "@/app/domain/lectureNodes";

const dfs = (
  title: string | undefined,
  lectureStructure: LectureStructure,
  lecturesToUpdate: LectureNode[]
) => {
  if (!title) return;
  const lectureNode = lectureStructure[title];
  lecturesToUpdate.push(lectureNode);
  dfs(lectureNode?.parent, lectureStructure, lecturesToUpdate);
};

export function useGetLecturesToUpdate(title: string) {
  const lecturesToUpdate: LectureNode[] = [];
  const lectureStructure: LectureStructure = JSON.parse(
    localStorage.getItem("completed-lectures") || "{}"
  );
  const lectureNode = lectureStructure[title];
  lecturesToUpdate.push(lectureNode);
  dfs(lectureNode?.parent, lectureStructure, lecturesToUpdate);
  return lecturesToUpdate;
}
