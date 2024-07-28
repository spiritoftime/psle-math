import { database } from "@/utils/firebase-config";
import { get, ref } from "firebase/database";

async function getLectureNodes() {
  const snapshot = await get(ref(database, "lectureNodes"));
  return snapshot.val();
}
export default { getLectureNodes };
