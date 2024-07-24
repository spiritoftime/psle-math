"use client";
import { useGetLectureStructure } from "@/app/application/queries/useGetLectureStructure";
import { LectureStructure } from "@/app/domain/lectureNodes";
import React, { useEffect } from "react";
let didInit = false;

const getLectures = () => {
  const {
    isError,
    isLoading,
    data: lectureStructure,
  } = useGetLectureStructure();
  console.log(lectureStructure, isLoading);
  if (isError) {
    // add dialog to warn user and they should login to save progress
  }

  return <></>;
};

export default getLectures;
