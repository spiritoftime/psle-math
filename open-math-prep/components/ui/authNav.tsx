"use client";
import React, { Suspense } from "react";
import AuthButton from "./authButton";
import Link from "next/link";
import { cn } from "@/utils/cn";
import { itemVariants } from "@/app/layout.client";
import { useGetUser } from "@/app/application/queries/useGetUser";
import { usePathname } from "next/navigation";
import ButtonSkeleton from "@/app/docs/[...slug]/_components/buttonSkeleton";

const AuthNavContent = () => {
  const { data: user } = useGetUser();
  const pathname = usePathname();

  if (user) {
    return <AuthButton title="Logout" />;
  } else if (pathname === "/") {
    return (
      <Link key={"Login"} href={`/login`} className={cn(itemVariants())}>
        {"Login"}
      </Link>
    );
  } else {
    return <AuthButton title="Login" />;
  }
};

const AuthNav = () => {

  return (
    <Suspense fallback={<ButtonSkeleton />}>
      <AuthNavContent />
    </Suspense>
  );
};

export default AuthNav;
