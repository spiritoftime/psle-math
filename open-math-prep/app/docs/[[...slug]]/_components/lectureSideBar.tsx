"use client";
import { useEffect, useState } from "react";
import ProgressIndicator from "./progressIndicator";
import { PageTree } from "fumadocs-core/server";
const getLectureProgress = (
  lecture: string,
  completedLectures: any
): number => {
  return completedLectures?.[lecture]?.progress ?? 0;
};

const LectureSideBar: React.FC<{ item: PageTree.Item }> = ({ item }) => {
  const [progress, setProgress] = useState(0);
  // useEffect(() => {
  //   const completedLectures = JSON.parse(
  //     localStorage.getItem("completed-lectures") || "{}"
  //   );
  //   setProgress(getLectureProgress(title, completedLectures));
  // }, [route]);

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
      {item.name !== "Introduction" && (
        <ProgressIndicator title={item.url} progress={progress} />
      )}
      {item.name}
    </div>
  );
};
export { LectureSideBar };
