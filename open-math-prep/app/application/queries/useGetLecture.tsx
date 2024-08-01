"use client";

import { useBaseFetch } from "@/utils/utils";
import { useQuery } from "@tanstack/react-query";

export const LECTURE_QUERY_KEY = "getLecture";

export function getQueryKey(title?: string) {
  return title ? [LECTURE_QUERY_KEY, title] : [LECTURE_QUERY_KEY];
}

export function useGetLecture(title: string) {
  return useQuery({
    queryKey: getQueryKey(title),
    queryFn: () =>
      useBaseFetch(`lectureProgress?title=${title}`, {
        method: "GET",
      }),
  });
}
