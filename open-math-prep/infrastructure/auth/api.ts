import { createClient } from "@/utils/supabase/client";
const getUser = async () => {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  return data.user;
};
export { getUser };
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
