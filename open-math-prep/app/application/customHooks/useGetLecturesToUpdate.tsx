"use client";

import { LectureNode, LectureStructure } from "@/app/domain/lectureNodes";

const dfs = (
  title: string | undefined,
  lectureStructure: LectureStructure,
  lecturesToUpdate: LectureNode[]
) => {
  if (!title) return;
  const lectureNode = lectureStructure[title];

  let progress = 0;
  if (lectureNode.children) {
    for (const c of lectureNode.children) {
      progress += lectureStructure[c].progress;
    }
    lectureNode.progress = Math.floor(progress / lectureNode.children.length);
  }
  lecturesToUpdate.push(lectureNode);
  dfs(lectureNode?.parent, lectureStructure, lecturesToUpdate);
};

export function useGetLecturesToUpdate(title: string):LectureNode[] {
  const lecturesToUpdate: LectureNode[] = [];
  const lectureStructure: LectureStructure = JSON.parse(
    localStorage.getItem("completed-lectures") || "{}"
  );
  const lectureNode = lectureStructure[title];
  lectureNode.progress = 100;
  lecturesToUpdate.push(lectureNode);
  dfs(lectureNode?.parent, lectureStructure, lecturesToUpdate);
  return lecturesToUpdate;
}
