"use client";
import { useGetLectureStructure } from "@/app/application/queries/useGetLectureStructure";
import React from "react";

const getLectures = () => {
  const {
    isError,
    isLoading,
    data: lectureStructure,
  } = useGetLectureStructure();
  if (isError) {
    // add dialog to warn user and they should login to save progress
  }
  if (!isLoading && lectureStructure) {
    const localStorageProgress = JSON.parse(
      localStorage.getItem("completed-lectures") || "{}"
    );
  }
  return <></>;
};

export default getLectures;
