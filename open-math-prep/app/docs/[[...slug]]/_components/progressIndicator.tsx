"use client";
import React, { Suspense } from "react";
import styles from "./progressIndicator.module.css";
import { useGetLectureStructure } from "../../../application/queries/useGetLectureStructure";
import { LectureStructure } from "../../../domain/lectureNodes/lectureNodes";
import Skeleton from "./skeleton";
import { useIsClient } from "@/app/clientProvider";

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
const progressIndicatorWrapper: React.FC<{ title: string }> = ({ title }) => {
  // const isClient = useIsClient();
  // const { data }: { data: LectureStructure | undefined } =
  //   useGetLectureStructure();

  // return (
  //   <Suspense fallback={<Skeleton />}>
  //     {isClient && data && title in data ? (
  //       <ProgressIndicator title={title} progress={data[title].progress} />
  //     ) : (
  //       <></>
  //     )}
  //   </Suspense>
  // );
  return <></>;
};
export default progressIndicatorWrapper;
