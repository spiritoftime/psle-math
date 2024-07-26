import { HomeLayout } from "fumadocs-ui/home-layout";
import Link from "next/link";
import { baseOptions } from "./layout.config";

export default function HomePage() {
  return (
    <HomeLayout {...baseOptions}>
      <main className="flex h-screen flex-col justify-center text-center">
        <h1 className="mb-4 text-2xl font-bold">Hello World</h1>
        <p className="text-muted-foreground">
          You can open{" "}
          <Link
            href="/docs/lectures"
            className="text-foreground font-semibold underline"
          >
            /docs/lectures
          </Link>{" "}
          and see the documentation.
        </p>
      </main>
    </HomeLayout>
  );
}
