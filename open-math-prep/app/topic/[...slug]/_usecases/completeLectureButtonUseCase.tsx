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

export function GetLecturesToUpdate(title: string): LectureNode[] {
  const lecturesToUpdate: LectureNode[] = [];
  const lectureStructure: LectureStructure = JSON.parse(
    localStorage.getItem("completed-lectures") || "{}"
  );
  const lectureNode = lectureStructure[title];
  if (!lectureNode) return [];
  lectureNode.progress = 100;
  lecturesToUpdate.push(lectureNode);
  dfs(lectureNode?.parent, lectureStructure, lecturesToUpdate);
  return lecturesToUpdate;
}

export function markCompletedLectureNonLoggedIn(
  lecturesToUpdate: LectureNode[]
) {
  const completedLectures:LectureStructure = JSON.parse(
    localStorage.getItem("completed-lectures") || "{}"
  );
  for (const lecture of lecturesToUpdate) {
    completedLectures[lecture.title] = {
      ...completedLectures[lecture.title],
      progress: lecture.progress,
    };
  }
  localStorage.setItem("completed-lectures", JSON.stringify(completedLectures));
}
