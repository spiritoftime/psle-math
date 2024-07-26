import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import "katex/dist/katex.css";
import ClientProvider from "./clientProvider";
import { Toaster } from "@/components/ui/toaster";
import { Body } from "./layout.client";
const inter = Inter({
  subsets: ["latin"],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <Body>
        <RootProvider
          search={{
            links: [
              ["Home", "/"],
              ["Lectures", "/lectures"],
            ],
          }}
        >
          <ClientProvider>
            {children}
            <Toaster />
          </ClientProvider>
        </RootProvider>
      </Body>
    </html>
  );
}
