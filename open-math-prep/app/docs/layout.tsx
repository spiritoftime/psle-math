import { DocsLayout } from "fumadocs-ui/layout";
import type { ReactNode } from "react";
import { docsOptions } from "../layout.config";
import { LectureSideBar } from "./[[...slug]]/_components/lectureSideBar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      sidebar={{
        ...docsOptions.sidebar,
        components: {
          ...docsOptions.sidebar?.components,
          Item: LectureSideBar ,
        },
      }}
      {...docsOptions}
    >
      {children}
    </DocsLayout>
  );
}
