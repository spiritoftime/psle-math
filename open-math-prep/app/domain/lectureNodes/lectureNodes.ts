export interface LectureNode {
  parent?: string;
  children?: string[];
  progress: number;
}
export interface LectureStructure {
  [key: string]: LectureNode;
}
