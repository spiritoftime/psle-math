import { type DocsLayoutProps } from "fumadocs-ui/layout";
import { type HomeLayoutProps } from "fumadocs-ui/home-layout";
import { pageTree } from "@/app/source";
import Logo from "@/public/hat.png";
import Image from "next/image";
import { NavChildren } from "./layout.client";
import { RootToggle } from "fumadocs-ui/components/layout/root-toggle";
import { modes } from "@/utils/modes";
import ServerNavChildren from "@/components/ui/serverNavChildren";

export const baseOptions: HomeLayoutProps = {
  githubUrl: "https://github.com/spiritoftime/psle-math",
  nav: {
    title: (
      <div className="flex gap-1 items-center">
        <Image
          width={32} // Adjust as needed
          height={32}
          alt="OpenMathPrep Logo"
          src={Logo}
          sizes="100px"
          className=" w-12 md:w-16 "
          aria-label="OpenMathPrep Logo"
        />
        <span className="font-medium [.uwu_&]:hidden max-md:[header_&]:hidden">
          OpenMathPrep
        </span>
      </div>
    ),
    transparentMode: "top",
    children: <ServerNavChildren />,
  },
};
// docs layout configuration
export const docsOptions: DocsLayoutProps = {
  ...baseOptions,
  tree: pageTree,
  sidebar: {
    defaultOpenLevel: 0,
    banner: (
      <RootToggle
        options={modes.map((mode) => ({
          url: `/docs/${mode.param}`,
          icon: (
            <mode.icon
              className="size-9 shrink-0 rounded-md bg-gradient-to-t from-fd-background/80 p-1.5"
              style={{
                backgroundColor: `hsl(var(--${mode.param}-color)/.3)`,
                color: `hsl(var(--${mode.param}-color))`,
              }}
            />
          ),
          title: mode.name,
          description: mode.description,
        }))}
      />
    ),
  },
};
