"use client";

import { useBaseFetch } from "@/utils/utils";
import { useQuery } from "@tanstack/react-query";

export function getQueryKey() {
  return ["getLecture"];
}
export function useGetLecture(title: string) {
  return useQuery({
    queryKey: getQueryKey(),
    queryFn: () =>
      useBaseFetch(`lectureProgress?title=${title}`, {
        method: "GET",
      }),
  });
}
