export interface LectureNode {
  parent?: string;
  children?: string[];
  progress: number;
  title:string;
}
export interface LectureStructure {
  [key: string]: LectureNode;
}
