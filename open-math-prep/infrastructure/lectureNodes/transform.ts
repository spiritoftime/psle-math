import { LectureStructure } from "@/app/domain/lectureNodes";
import { LectureStructureDto } from "./dto";

export function dtoToLectureStructure(
  dto: LectureStructureDto
): LectureStructure {
  return Object.entries(dto).reduce((acc, [key, value]) => {
    acc[key] = {
      title: value.title,
      parent: value.parent,
      children: value.children,
      progress: value.progress,
    };
    return acc;
  }, {} as LectureStructure);
}
