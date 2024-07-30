import { getPage, getPages } from "@/app/source";
import type { Metadata } from "next";
import { DocsPage, DocsBody } from "fumadocs-ui/page";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";

import { AuthNav } from "@/components/ui/authNav";
import CompleteLectureButton from "./_components/completeLectureButton";
import { Suspense } from "react";
import { ProgressIndicatorSkeleton } from "./_components/progressIndicatorSkeleton";

const DynamicProgressIndicator = dynamic(
  () => import("./_components/progressIndicator"),
  {
    ssr: false,
  }
);
export default async function Page({
  params,
}: {
  params: { slug?: string[] };
}) {
  const page = getPage(params.slug);
  if (page == null) {
    notFound();
  }

  const MDX = page.data.exports.default;
  return (
    <>
      <DocsPage toc={page.data.exports.toc} full={page.data.full}>
        <DocsBody>
          <div className="flex">
            <AuthNav />
          </div>

          <h1 className="mb-1">{page.data.title}</h1>

          {params.slug?.includes("lectures") &&
          page.data.title !== "Introduction" ? (
            <Suspense fallback={<ProgressIndicatorSkeleton />}>
              <DynamicProgressIndicator title={page.data.title} />
            </Suspense>
          ) : (
            <></>
          )}
          <MDX />
        </DocsBody>
        <div className="flex justify-end mt-4">
          <CompleteLectureButton
            pageTitle={page.data.title}
            title="Mark as completed"
          />
        </div>
      </DocsPage>
    </>
  );
}

export async function generateStaticParams() {
  return getPages().map((page) => ({
    slug: page.slugs,
  }));
}

export function generateMetadata({ params }: { params: { slug?: string[] } }) {
  const page = getPage(params.slug);

  if (page == null) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  } satisfies Metadata;
}
