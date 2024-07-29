"use client";
import React, { Suspense, useEffect, useState } from "react";
import styles from "./progressIndicator.module.css";
import { ProgressIndicatorSkeleton } from "./progressIndicatorSkeleton";
import { useGetUser } from "@/app/application/queries/useGetUser";
import { useToast } from "@/components/ui/use-toast";
import { useBaseFetch } from "@/utils/utils";
import { useGetLecture } from "@/app/application/queries/useGetLecture";

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
  const { toast } = useToast();
  const { data: user } = useGetUser();
  const { data: lectureData, error, isLoading } = useGetLecture(title);

  // return <></>;
  console.log(lectureData, error, isLoading);
  if (isLoading) {
    return <ProgressIndicatorSkeleton />;
  }
  // if (error && !isLoading) {
  //   toast({
  //     title: "Failed to fetch lecture progress",
  //     description: "Please try again later",
  //   });
  // }
  const lectureStructure = JSON.parse(
    localStorage.getItem("completed-lectures") || "{}"
  );

  const progress =
    user && lectureData?.[0]?.progress !== undefined
      ? lectureData[0].progress
      : lectureStructure[title]?.progress;

  if (progress === undefined) {
    return <></>;
  }

  return <ProgressIndicator title={title} progress={progress} />;
};

export default ProgressIndicatorWrapper;
