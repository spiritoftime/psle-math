"use client";

import { cva } from "class-variance-authority";
import { useParams } from "next/navigation";
import { type ReactNode } from "react";
import { cn } from "@/utils/cn";
import dynamic from "next/dynamic";
import { NavComboBox } from "@/components/ui/navComboBox";
import NavDropdownMenu from "@/components/ui/navDropdownMenu";

export const itemVariants = cva(
  "rounded-md px-2 py-1 transition-colors text-muted-foreground hover:text-foreground"
);

export function Body({
  children,
}: {
  children: ReactNode;
}): React.ReactElement {
  const mode = useMode();

  return (
    <body className={cn(mode, "flex min-h-screen flex-col")}>{children}</body>
  );
}
const DynamicAuthNav = dynamic(() => import("@/components/ui/authNav"), {
  ssr: false,
});
export function NavChildren(): React.ReactElement {
  return (
    <div className="flex items-center p-1 text-sm bg-fd-muted/80 text-fd-muted-foreground max-md:absolute max-md:left-1/2 max-md:-translate-x-1/2">
      <NavDropdownMenu />
    </div>
  );
}

export function useMode(): string | undefined {
  const { slug } = useParams();
  return Array.isArray(slug) && slug.length > 0 ? slug[0] : undefined;
}
