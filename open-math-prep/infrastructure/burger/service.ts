import burgersApi from "./api";
import { dtoToBurgers } from "./transform";
async function getBurgers(api = burgersApi) {
  const response = await api.getBurgers();
  const burgers = dtoToBurgers(response.data ?? []);
  return burgers;
}
export default { getBurgers };
