import { HomeLayout } from "fumadocs-ui/home-layout";
import Link from "next/link";
import { baseOptions } from "./layout.config";
import Test from "@/components/ui/test";
// import MarblesProblem from "@/components/ui/model";
import dynamic from "next/dynamic";
import {
  BranchDiagram,
  exampleData2,
  exampleData,
} from "../components/question/remainderBranch";

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
        <BranchDiagram
          data={exampleData2}
          options={{
            nodeSpacing: 100,
            levelSpacing: 200,
            textColor: "#000000",
            edgeColor: "#888888",
          }}
        />
      </main>
    </HomeLayout>
  );
}
