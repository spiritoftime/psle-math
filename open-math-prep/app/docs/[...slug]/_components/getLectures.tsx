"use client";
import { useGetLectureStructure } from "@/app/application/queries/useGetLectureStructure";
import { useToast } from "@/components/ui/use-toast";

const GetLectures = () => {
  const { toast } = useToast();
  const { error, isFetching } = useGetLectureStructure();
  if (error && !isFetching) {
    toast({
      title: "Error saving lecture progress",
      description: "If you are not signed in, please sign in to save progress.",
    });
  }

  return <></>;
};

export default GetLectures;
