"use client";

import { getUser } from "@/infrastructure/auth";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { queryClient } from "@/app/clientProvider";

queryClient.setQueryDefaults(["getUser"], {
  staleTime: 1000 * 60 * 60 * 24, // 24 hours
});
export function getQueryKey() {
  return ["getUser"];
}
export function useGetUser() {
  return useSuspenseQuery({
    queryKey: getQueryKey(),
    queryFn: () => getUser(),
  });
}
