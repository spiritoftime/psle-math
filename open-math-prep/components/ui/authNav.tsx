"use client";
import React from "react";
import AuthButton from "./authButton";
import Link from "next/link";
import { cn } from "@/utils/cn";
import { itemVariants } from "@/app/layout.client";
import { useGetUser } from "@/app/application/queries/useGetUser";
import { usePathname } from "next/navigation";

const AuthNav = () => {
  const { data: user } = useGetUser();
  const pathname = usePathname();
  return (
    <>
      {user ? (
        <AuthButton title="Logout" />
      ) : pathname === "/" ? (
        <Link key={"Login"} href={`/login`} className={cn(itemVariants())}>
          {"Login"}
        </Link>
      ) : (
        <AuthButton title="Login to get tips on PSLE!" />
      )}
    </>
  );
};

export { AuthNav };
