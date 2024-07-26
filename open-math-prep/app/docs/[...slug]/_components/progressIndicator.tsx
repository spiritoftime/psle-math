"use client";
import React, { Suspense } from "react";
import styles from "./progressIndicator.module.css";
import { LectureStructure } from "../../../domain/lectureNodes/lectureNodes";
import Skeleton from "./skeleton";

const ProgressIndicator: React.FC<{ title: string; progress: number }> = ({
  title,
  progress,
}) => {
  return (
    <div
      style={{ "--progress": `${progress}` } as React.CSSProperties}
      className={styles["progress-container"]}
    >
      <div className={styles["progress-value"]}></div>

      <div className={styles["progress-bar"]}>
        <progress id={title} max="100" value={progress}></progress>
      </div>
    </div>
  );
};
const ProgressIndicatorWrapper: React.FC<{ title: string }> = ({ title }) => {
  const [lectureProgress, setLectureProgress] = React.useState<
    LectureStructure | undefined
  >();
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      const storedProgress = localStorage.getItem("completed-lectures");
      if (storedProgress) {
        setLectureProgress(JSON.parse(storedProgress));
      }
      setIsLoading(false); // Set loading to false after data is fetched
    }, 1000);
  }, [title]);

  return (
    <Suspense fallback={<Skeleton />}>
      {isLoading ? (
        <Skeleton /> // Show Skeleton while loading
      ) : lectureProgress && title in lectureProgress ? (
        <ProgressIndicator
          title={title}
          progress={lectureProgress[title].progress}
        />
      ) : (
        <></>
      )}
    </Suspense>
  );
};

export default ProgressIndicatorWrapper;
