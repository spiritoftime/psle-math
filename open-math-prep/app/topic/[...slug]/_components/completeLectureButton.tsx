"use client";
import {
  markCompletedLectureNonLoggedIn,
  GetLecturesToUpdate,
  getLectureTitles,
} from "@/app/topic/[...slug]/_usecases/completeLectureButtonUseCase";
import { useGetUser } from "@/app/application/queries/useGetUser";
import { markCompletedLectureLoggedIn } from "@/app/topic/[...slug]/actions";
import React from "react";
import { useToast } from "@/components/ui/use-toast";
import { useQueryClient } from "@tanstack/react-query";
import { LECTURE_QUERY_KEY } from "@/app/application/queries/useGetLecture";
import { createClient } from "@/utils/supabase/client";
const supabaseClient = createClient();

const CompleteLectureButton: React.FC<{
  title: string;
  pageTitle: string;
}> = ({ title, pageTitle }) => {
  const { data: user } = useGetUser();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  return (
    <button
      onClick={async () => {
        let lecturesToUpdate;
        if (user) {
          const lectureProgressesToQuery = getLectureTitles(pageTitle);
          const { data: lectureData, error } = await supabaseClient
            .from("lectureprogress")
            .select("progress, title")
            .in("title", lectureProgressesToQuery);
          // recurse through lectureStructure to calculate progress & get lectures to mutate
          lecturesToUpdate = GetLecturesToUpdate(pageTitle, lectureData || []);
        } else {
          lecturesToUpdate = GetLecturesToUpdate(pageTitle,[]);
        }
        // if logged in use below
        if (user) {
          const result = await markCompletedLectureLoggedIn(lecturesToUpdate);
          if (result?.error) {
            toast({
              title: "Error updating lecture progress",
              description: `Please try again later. ${result.error}`,
            });
          }

          queryClient.invalidateQueries({ queryKey: [LECTURE_QUERY_KEY] });
        } else {
          // if not logged in mutate localStorage
          markCompletedLectureNonLoggedIn(lecturesToUpdate);
          window.dispatchEvent(new Event("lecturesUpdated"));
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

export default CompleteLectureButton;
