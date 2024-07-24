import { DocsLayout } from "fumadocs-ui/layout";
import type { ReactNode } from "react";
import { docsOptions } from "../layout.config";
import dynamic from "next/dynamic";
const DynamicGetLectures = dynamic(
  () => import("./[[...slug]]/_components/getLectures"),
  {
    ssr: false,
  }
);
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout {...docsOptions}>
      <DynamicGetLectures />
      {children}
    </DocsLayout>
  );
}
