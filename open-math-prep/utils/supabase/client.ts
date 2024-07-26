import { createBrowserClient } from "@supabase/ssr";

export const createClient = () =>
  createBrowserClient(
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_SUPABASE_URL!
      : process.env.NEXT_PUBLIC_SUPABASE_URL_LOCAL!,
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
      : process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY_LOCAL!
  );
