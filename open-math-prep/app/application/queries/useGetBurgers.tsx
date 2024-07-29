"use client";
import { queryClient } from "@/app/clientProvider";
import { useQuery } from "@tanstack/react-query";
import { burgerService } from "@/infrastructure/burger";

queryClient.setQueryDefaults(["lectureNodes"], {
  refetchOnMount: false,
  refetchOnWindowFocus: false,
  refetchOnReconnect: false,
});

export function getQueryKey() {
  return ["getBurgers"];
}
export function useGetBurgers() {
  return useQuery({
    queryKey: getQueryKey(),
    queryFn: () => burgerService.getBurgers(),
  });
}
