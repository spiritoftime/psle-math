"use client";
import { useQuery } from "@tanstack/react-query";
import { lectureNodeService } from "@/infrastructure/lectureNodes";
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
  return useQuery({
    queryKey: getQueryKey(),
    queryFn: () => lectureNodeService.getLectureStructure(),
  });
}
