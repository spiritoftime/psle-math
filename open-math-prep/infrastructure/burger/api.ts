import { createClient } from "@/utils/supabase/client";

async function getBurgers() {
  const supabase = createClient();
  const { data, error } = await supabase.from("burgers").select("*");
  return { data, error };
}
export default { getBurgers };
