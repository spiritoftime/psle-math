import { getPage, getPages } from "@/app/source";
import type { Metadata } from "next";
import { DocsPage, DocsBody } from "fumadocs-ui/page";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import { createClient } from "@/utils/supabase/server";
import LoginButton from "@/components/ui/authButton";

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
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  return (
    <>
      <DocsPage toc={page.data.exports.toc} full={page.data.full}>
        <DocsBody>
          {!data?.user && (
            <div className="flex">
              <LoginButton
                redirectPath="/login"
                title={"Login to track progress and get email on tips!"}
              />
            </div>
          )}

          <h1 className="mb-1">{page.data.title}</h1>

          {params.slug?.includes("lectures") ? (
            <DynamicProgressIndicator title={page.data.title} />
          ) : (
            <></>
          )}
          <MDX />
        </DocsBody>
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
