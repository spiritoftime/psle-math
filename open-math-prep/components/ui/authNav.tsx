"use client";
import React from "react";
import AuthButton from "./authButton";
import Link from "next/link";
import { cn } from "@/utils/cn";
import { itemVariants } from "@/app/layout.client";
import { useGetUser } from "@/app/application/queries/useGetUser";

const AuthNav = () => {
  const { data: user } = useGetUser();
  console.log(user);
  return (
    <>
      {user ? (
        <AuthButton title="Logout" />
      ) : (
        <Link key={"Login"} href={`/login`} className={cn(itemVariants())}>
          {"Login"}
        </Link>
      )}
    </>
  );
};

export { AuthNav };
