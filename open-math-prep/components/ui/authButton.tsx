"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { logout } from "@/app/login/actions";
import { useQueryClient } from "@tanstack/react-query";
const AuthButton: React.FC<{
  title: string;
}> = ({ title }) => {
  const queryClient = useQueryClient();

  const router = useRouter();
  return (
    <button
      onClick={
        title === "Logout"
          ? async () => {
              await logout();
              queryClient.invalidateQueries({ queryKey: ["getUser"] });
            }
          : () => {
              router.push("/login");
            }
      }
      type="button"
      className=" ml-auto text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-2.5 py-2.5 text-center me-2 mb-0"
    >
      {title}
    </button>
  );
};

export default AuthButton;
