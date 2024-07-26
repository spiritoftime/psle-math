"use client";
import { useGetBurgers } from "@/app/application/queries/useGetBurgers";
import React from "react";

const Test = () => {
  const { error, isFetching, data } = useGetBurgers();
  console.log(data);
  return <div>Test</div>;
};

export default Test;
