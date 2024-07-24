import { DocsLayout } from "fumadocs-ui/layout";
import type { ReactNode } from "react";
import { docsOptions } from "../layout.config";
import GetLectures from "./[[...slug]]/_components/getLectures";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout {...docsOptions}>
      <GetLectures />
      {children}
    </DocsLayout>
  );
}
