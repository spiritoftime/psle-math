import { NavChildren } from "@/app/layout.client";
import { createClient } from "@/utils/supabase/server";
import React from "react";

const ServerNavChildren = async () => {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  return (
    <NavChildren
      signedIn={data?.user ? true : false}
    />
  );
};

export default ServerNavChildren;
