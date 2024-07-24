"use client";
import { useGetLectureStructure } from "@/app/application/queries/useGetLectureStructure";
import { useToast } from "@/components/ui/use-toast";
import { useIsClient } from "@/app/clientProvider";
import { useEffect, useState } from "react";

const GetLectures = () => {
  const { toast } = useToast();
  // const isClient = useIsClient();
  // if (isClient) {
  //   const { error, isFetching } = useGetLectureStructure();
  //   if (error && !isFetching) {
  //     // add dialog to warn user and they should login to save progress
  //     toast({
  //       title: "Error saving lecture progress",
  //       description:
  //         "If you are not signed in, please sign in to save progress.",
  //     });
  //   }
  // }
  return <></>;
};

export default GetLectures;
