import { HomeLayout } from "fumadocs-ui/home-layout";
import Link from "next/link";
import { baseOptions } from "./layout.config";
import Test from "@/components/ui/test";
import RemainderBranch from "@/components/question/remainderBranch";
// import MarblesProblem from "@/components/ui/model";

export default function HomePage() {
  return (
    <HomeLayout {...baseOptions}>
      <main className="flex flex-col justify-center h-screen text-center">
        <h1 className="mb-4 text-2xl font-bold">Hello World</h1>
        <p className="text-muted-foreground">
          You can open{" "}
          <Link
            href="/docs/lectures"
            className="font-semibold underline text-foreground"
          >
            /docs/lectures
          </Link>{" "}
          and see the documentation.
        </p>
        <Test />
        {/* <MarblesProblem /> */}
        <RemainderBranch/>
      </main>
    </HomeLayout>
  );
}
