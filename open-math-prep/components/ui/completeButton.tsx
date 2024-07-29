"use client";
import {
  markCompletedLectureNonLoggedIn,
  useGetLecturesToUpdate,
} from "@/app/application/customHooks/useGetLecturesToUpdate";
import { useGetUser } from "@/app/application/queries/useGetUser";
import { markCompletedLectureLoggedIn } from "@/app/docs/[...slug]/actions";
import React from "react";
import { useToast } from "./use-toast";

const CompleteButton: React.FC<{
  title: string;
  pageTitle: string;
}> = ({ title, pageTitle }) => {
  const { data: user } = useGetUser();
  const { toast } = useToast();

  return (
    <button
      onClick={async () => {
        // recurse through lectureStructure to calculate progress & get lectures to mutate
        const lecturesToUpdate = useGetLecturesToUpdate(pageTitle);
        // if logged in use below
        if (user) {
          const error = await markCompletedLectureLoggedIn(lecturesToUpdate);
          if (error?.insertError) {
            toast({
              title: "Error inserting lecture progress",
              description: "Please try again later.",
            });
          }
          if (error?.updateError) {
            toast({
              title: "Error updating lecture progress",
              description: "Please try again later.",
            });
          }
        } else {
          // if not logged in mutate localStorage
          markCompletedLectureNonLoggedIn(lecturesToUpdate);
        }
      }}
      className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
    >
      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
        {title}
      </span>
    </button>
  );
};

export default CompleteButton;
