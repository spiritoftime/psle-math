"use client";
import React, { Suspense, useEffect, useState } from "react";
import styles from "./progressIndicator.module.css";
import { ProgressIndicatorSkeleton } from "./progressIndicatorSkeleton";
import { useGetUser } from "@/app/application/queries/useGetUser";
import { useToast } from "@/components/ui/use-toast";
import { useBaseFetch } from "@/utils/utils";

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
  const [isLoading, setIsLoading] = React.useState(true);
  const [progress, setProgress] = useState(0);

  const { data: user } = useGetUser();

  const { toast } = useToast();
  const lectureStructure = JSON.parse(
    localStorage.getItem("completed-lectures") || "{}"
  );
  useEffect(() => {
    const fetchLectureProgress = async () => {
      if (user) {
        const response = await useBaseFetch(`lectureProgress?title=${title}`, {
          method: "GET",
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const { data, error } = await response.json();
        if (error) {
          toast({
            title: "Error fetching lecture progress",
            description: "Please try again later.",
          });
        }
        if (data && data.length > 0) setProgress(data[0].progress);
      } else {
        if (title in lectureStructure)
          setProgress(lectureStructure[title].progress);
      }
      setIsLoading(false);
    };
    fetchLectureProgress();
  }, [title, user, toast]);

  return (
    <Suspense fallback={<ProgressIndicatorSkeleton />}>
      {isLoading ? (
        <ProgressIndicatorSkeleton />
      ) : title in lectureStructure ? (
        <ProgressIndicator title={title} progress={progress} />
      ) : (
        <></>
      )}
    </Suspense>
  );
};

export default ProgressIndicatorWrapper;
