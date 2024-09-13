"use client";

import { LectureNode, LectureStructure } from "@/app/domain/lectureNodes";

interface LoggedInProgresses {
  progress: number;
  title: string;
}

const getRootTitle = (
  title: string,
  lectureStructure: LectureStructure
): string => {
  let node = lectureStructure[title];
  while (node.parent) {
    node = lectureStructure[node.parent];
  }
  return node.title;
};
const dfs = (
  title: string,
  lectureStructure: LectureStructure,
  titles: string[]
) => {
  titles.push(title);
  const node = lectureStructure[title];
  if (node.children) {
    for (const child of node.children) {
      dfs(child, lectureStructure, titles);
    }
  }
};
export const getLectureTitles = (title: string): string[] => {
  let titles: string[] = [];
  const lectureStructure: LectureStructure = JSON.parse(
    localStorage.getItem("completed-lectures") || "{}"
  );
  // travel to root node
  const rootTitle = getRootTitle(title, lectureStructure);
  //  collect all titles via dfs, then return

  dfs(rootTitle, lectureStructure, titles);
  return titles;
};

const calculateProgress = (
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
  calculateProgress(lectureNode?.parent, lectureStructure, lecturesToUpdate);
};

export function GetLecturesToUpdate(
  title: string,
  loggedInProgresses?: LoggedInProgresses[]
): LectureNode[] {
  const lecturesToUpdate: LectureNode[] = [];
  let lectureStructure: LectureStructure = JSON.parse(
    localStorage.getItem("completed-lectures") || "{}"
  );
  // if logged in, need to update the progress of lecture nodes in lecture structure with the actual progress data.
  if (loggedInProgresses && loggedInProgresses.length > 0) {
    for (const progress of loggedInProgresses) {
      lectureStructure[progress.title] = {
        ...lectureStructure[progress.title],
        progress: progress.progress,
      };
    }
  }
  const lectureNode = lectureStructure[title];
  if (!lectureNode) return [];
  lectureNode.progress = 100;
  lecturesToUpdate.push(lectureNode);
  calculateProgress(lectureNode?.parent, lectureStructure, lecturesToUpdate);
  return lecturesToUpdate;
}

export function markCompletedLectureNonLoggedIn(
  lecturesToUpdate: LectureNode[]
) {
  const completedLectures: LectureStructure = JSON.parse(
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
