"use client";
import React from "react";
import styles from "./progressIndicator.module.css";
import { ProgressIndicatorSkeleton } from "./progressIndicatorSkeleton";
import { useGetUser } from "@/app/application/queries/useGetUser";
import { useToast } from "@/components/ui/use-toast";
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
import { useEffect, useState } from "react";
import { LectureStructure } from "@/app/domain/lectureNodes";

const ProgressIndicatorWrapper: React.FC<{ title: string }> = ({ title }) => {
  const { toast } = useToast();
  const { data: user } = useGetUser();
  const { data: lectureData, error, isLoading } = useGetLecture(title);
  const [lectureStructure, setLectureStructure] = useState<LectureStructure>(
    JSON.parse(localStorage.getItem("completed-lectures") || "{}")
  );

  useEffect(() => {
    const handleLecturesUpdate = () => {
      const updatedLectureStructure = JSON.parse(
        localStorage.getItem("completed-lectures") || "{}"
      );
      setLectureStructure(updatedLectureStructure);
    };

    window.addEventListener("lecturesUpdated", handleLecturesUpdate);
    return () => {
      window.removeEventListener("lecturesUpdated", handleLecturesUpdate);
    };
  }, []);

  if (isLoading) {
    return <ProgressIndicatorSkeleton />;
  }
  if (error && !isLoading) {
    toast({
      title: "Failed to fetch lecture progress",
      description: "Please try again later",
    });
  }

  const progress =
    user && lectureData?.[0]?.progress
      ? lectureData[0].progress
      : !user
      ? lectureStructure[title]?.progress ?? 0
      : 0;

  return (
    <ProgressIndicator
      key={`${title}${progress}`}
      title={title}
      progress={progress}
    />
  );
};

export default ProgressIndicatorWrapper;
