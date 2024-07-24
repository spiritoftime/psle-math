export interface LectureNodeDto {
  name: string;
  parent?: string;
  children?: string[];
  progress: number;
}
export interface LectureStructureDto {
  [key: string]: LectureNodeDto;
}
