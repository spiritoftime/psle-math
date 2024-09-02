import { DocsLayout } from "fumadocs-ui/layout";
import type { ReactNode } from "react";
import { docsOptions } from "../layout.config";
import dynamic from "next/dynamic";
const DynamicGetLectures = dynamic(
  () => import("./[...slug]/_components/getLectures"),
  {
    ssr: false,
  }
);
export default function Layout({
  children,
  params,
}: {
  children: ReactNode;
  params: {
    tag: string;
    item: string;
  };
}) {
  return (
    <DocsLayout {...docsOptions}>
      {<DynamicGetLectures />}
      {children}
    </DocsLayout>
  );
}
