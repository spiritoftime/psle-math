import { useQuery } from "@tanstack/react-query";
import lectureNodeService from "@/infrastructure/lectureNodes";

export function getQueryKey() {
  return ["lectureNodes"];
}
export function useGetLectureStructure() {
  return useQuery({
    queryKey: getQueryKey(),
    queryFn: () => lectureNodeService.getLectureStructure(),
  });
}
