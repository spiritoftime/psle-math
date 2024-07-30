"use client";
import { useGetBurgers } from "@/app/application/queries/useGetBurgers";
import React from "react";

const Test = () => {
  const { error, isFetching, data } = useGetBurgers();
  return <div>Test</div>;
};

export default Test;
