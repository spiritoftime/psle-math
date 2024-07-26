import { createClient } from "@/utils/supabase/client";
import React from "react";
import AuthButton from "./authButton";
import Link from "next/link";
import { cn } from "@/utils/cn";
import { itemVariants } from "@/app/layout.client";

const authNav = ({ signedIn }: { signedIn: boolean }) => {
  const supabase = createClient();
  return (
    <>
      {signedIn ? (
        <AuthButton title="logout" />
      ) : (
        <Link key={"Login"} href={`/login`} className={cn(itemVariants())}>
          {"Login"}
        </Link>
      )}
    </>
  );
};

export default authNav;
