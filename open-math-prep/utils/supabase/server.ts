import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export const createClient = () => {
  const cookieStore = cookies();

  return createServerClient(
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_SUPABASE_URL!
      : process.env.NEXT_PUBLIC_SUPABASE_URL_LOCAL!,
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
      : process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY_LOCAL!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) => {
              cookieStore.set(name, value, options);
            });
          } catch (error) {
            // The `set` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    },
  );
};
