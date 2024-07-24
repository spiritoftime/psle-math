"use client";
import { useSuspenseQuery } from "@tanstack/react-query";
import lectureNodeService from "@/infrastructure/lectureNodes";
import { queryClient } from "@/app/clientProvider";
queryClient.setQueryDefaults(["lectureNodes"], {
  refetchOnMount: false,
  refetchOnWindowFocus: false,
  refetchOnReconnect: false,
});

export function getQueryKey() {
  return ["lectureNodes"];
}
export function useGetLectureStructure() {
  return useSuspenseQuery({
    queryKey: getQueryKey(),
    queryFn: () => lectureNodeService.getLectureStructure(),
  });
}
