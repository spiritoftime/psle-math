"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { LogInWithProvider, logout } from "@/app/login/actions";
import { useQueryClient } from "@tanstack/react-query";
import { Provider } from "@supabase/supabase-js";
import { LECTURE_QUERY_KEY } from "@/app/application/queries/useGetLecture";

interface StylingProps {
  isButton: boolean;
}

const defaultStyling: StylingProps = {
  isButton: true,
};

const AuthButton: React.FC<{
  styling?: StylingProps;
  title: string;
}> = ({ title, styling = defaultStyling }) => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const isValidProvider = (value: string): value is Provider => {
    return [
      "github",
      "google",
      "gitlab",
      "bitbucket",
      "azure",
      "keycloak",
      "apple",
      "facebook",
      "twitter",
      "discord",
      "twitch",
      "spotify",
    ].includes(value.toLowerCase());
  };

  const handleClick = async () => {
    if (title === "Logout") {
      await logout();
      queryClient.invalidateQueries({
        queryKey: ["getUser"],
      });
      queryClient.invalidateQueries({ queryKey: [LECTURE_QUERY_KEY] });
    } else if (title.startsWith("Login With")) {
      const provider = title.replace("Login With ", "");
      if (isValidProvider(provider)) {
        await LogInWithProvider(provider);
      }
    } else {
      router.push("/login");
    }
  };

  if (styling.isButton) {
    return (
      <button
        onClick={handleClick}
        type="button"
        className="ml-auto text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-2.5 py-2.5 text-center me-2 mb-0"
      >
        {title}
      </button>
    );
  } else {
    return (
      <span
        onClick={handleClick}
        className="rounded-md px-2 py-1 transition-colors text-muted-foreground hover:text-foreground cursor-pointer"
      >
        {title}
      </span>
    );
  }
};

export default AuthButton;
