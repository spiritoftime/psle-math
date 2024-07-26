import { HomeLayout } from "fumadocs-ui/home-layout";
import Link from "next/link";
import { baseOptions } from "../layout.config";

export default function HomePage() {
  return (
    <HomeLayout {...baseOptions}>
      <h1 className="mb-4 text-2xl font-bold">Hello World</h1>
      <p className="text-muted-foreground">
        You can open{" "}
        <Link
          href="/lectures"
          className="text-foreground font-semibold underline"
        >
          /lectures
        </Link>{" "}
        and see the documentation.
      </p>
    </HomeLayout>
  );
}
