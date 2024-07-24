"use client";
import { useGetLectureStructure } from "@/app/application/queries/useGetLectureStructure";
import React from "react";

const getLectures = () => {
  const lectureStructure = useGetLectureStructure();
  console.log(lectureStructure);
  return <></>;
};

export default getLectures;
