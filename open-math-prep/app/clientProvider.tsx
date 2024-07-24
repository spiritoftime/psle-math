"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { createContext, useContext, useEffect, useState } from "react";

const IsClientCtx = createContext(false);

export const IsClientCtxProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);
  return (
    <IsClientCtx.Provider value={isClient}>{children}</IsClientCtx.Provider>
  );
};

export function useIsClient() {
  return useContext(IsClientCtx);
}
export const queryClient = new QueryClient();

export default function ClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <IsClientCtxProvider>{children}</IsClientCtxProvider>
    </QueryClientProvider>
  );
}
