"use client";

import { cva } from "class-variance-authority";
import Link from "next/link";
import { useParams } from "next/navigation";
import { type ReactNode } from "react";
import { cn } from "@/utils/cn";
import { modes } from "@/utils/modes";
import { createClient } from "@/utils/supabase/server";
import AuthNav from "@/components/ui/authNav";

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

export function NavChildren(): React.ReactElement {
  return (
    <div className="rounded-md border bg-fd-muted/80 p-1 text-sm text-fd-muted-foreground max-md:absolute max-md:left-1/2 max-md:-translate-x-1/2">
      {modes.map((m) => (
        <Link
          key={m.param}
          href={`/docs/${m.param}`}
          className={cn(itemVariants())}
        >
          {m.name}
        </Link>
      ))}
      <AuthNav />
    </div>
  );
}

export function useMode(): string | undefined {
  const { slug } = useParams();
  return Array.isArray(slug) && slug.length > 0 ? slug[0] : undefined;
}
