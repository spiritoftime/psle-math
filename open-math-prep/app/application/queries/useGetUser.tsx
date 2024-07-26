"use client";

import getUser from "@/infrastructure/auth/api";
import { useQuery } from "@tanstack/react-query";


export function getQueryKey() {
  return ["getUser"];
}
export function useGetUser() {
 return useQuery({
    queryKey: getQueryKey(),
    queryFn: () => getUser(),
  });
}
