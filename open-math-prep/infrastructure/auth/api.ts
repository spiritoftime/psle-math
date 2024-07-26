import { createClient } from "@/utils/supabase/client";
const getUser = async () => {
  const supabase = createClient();
  //   console.log("Server only");
  const { data, error } = await supabase.auth.getUser();
  return data.user;
};
export default getUser;
