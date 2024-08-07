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
import { JourneyDiagram } from "@/components/question/speedJourney";
import { journeyByPartQuestion1Data } from "@/question/speed/journeyByParts";
// const customStyles = {
//   border: "2px dashed #ff0000",
//   padding: 20,
//   borderRadius: 12,
//   boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//   fontSize: "10px",
//   fontWeight: "normal",
// };

// const customOptions = {
//   nodeSpacing: 300,
//   levelSpacing: 500,
//   nodeColor: "#e0ffe0",
//   edgeColor: "#ff00ff",
//   textColor: "#0000ff",
//   style: customStyles,
// };
export default function HomePage() {

  return (
    <HomeLayout {...baseOptions}>
      <main className="flex flex-col justify-center min-h-screen text-center">
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
        <JourneyDiagram
          scenarios={journeyByPartQuestion1Data.journeyDiagram.scenarios}
        />
        {/* <MarblesProblem /> */}
        {/* <BranchDiagram data={exampleData2} /> */}
      </main>
    </HomeLayout>
  );
}
