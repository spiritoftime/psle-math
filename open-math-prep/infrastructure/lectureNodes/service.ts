import { LectureStructure } from "@/app/domain/lectureNodes";
import { lectureNodesApi } from "./api";
import { dtoToLectureStructure } from "./transform";
const updateLocalStorage = (lectureStructure: LectureStructure) => {
  if (lectureStructure) {
    const localStorageProgress: LectureStructure = JSON.parse(
      window.localStorage.getItem("completed-lectures") || "{}"
    );
    const lectureSet = new Set(Object.keys(lectureStructure));
    for (const lec in localStorageProgress) {
      if (!lectureSet.has(lec)) {
        delete localStorageProgress[lec];
      }
    }
    for (const lec in lectureStructure) {
      if (!(lec in localStorageProgress)) {
        localStorageProgress[lec] = { ...lectureStructure[lec] };
      }
    }

    window.localStorage.setItem(
      "completed-lectures",
      JSON.stringify(localStorageProgress)
    );
    window.dispatchEvent(new Event("lecturesUpdated"));
  }
};
async function getLectureStructure(api = lectureNodesApi) {
  const response = await api.getLectureNodes();
  const LectureStructure = dtoToLectureStructure(response);
  updateLocalStorage(LectureStructure);
  return LectureStructure;
}
export const lectureNodeService = {
  getLectureStructure,
  updateLocalStorage,
};
