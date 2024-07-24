import lectureNodesApi from "./api";
import { dtoToLectureStructure } from "./transform";
async function getLectureStructure(api = lectureNodesApi) {
  const response = await api.getLectureNodes();
  return dtoToLectureStructure(response);
}
export default { getLectureStructure };
