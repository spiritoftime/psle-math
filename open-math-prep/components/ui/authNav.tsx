import { createClient } from "@/utils/supabase/client";
import React from "react";
import AuthButton from "./authButton";
import Link from "next/link";
import { cn } from "@/utils/cn";
import { itemVariants } from "@/app/layout.client";

const authNav = async () => {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  console.log(data);
  return (
    <>
      {!data?.user ? (
        <Link key={"Logout"} href={`/logout`} className={cn(itemVariants())}>
          {"Logout"}
        </Link>
      ) : (
        <Link key={"Login"} href={`/login`} className={cn(itemVariants())}>
          {"Login"}
        </Link>
      )}
    </>
  );
};

export default authNav;
