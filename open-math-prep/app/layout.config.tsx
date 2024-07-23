import { type DocsLayoutProps } from "fumadocs-ui/layout";
import { type HomeLayoutProps } from "fumadocs-ui/home-layout";
import { pageTree } from "@/app/source";
import Logo from "@/public/hat.png";
import Image from "next/image";

// shared configuration
export const baseOptions: HomeLayoutProps = {
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
  },
  links: [
    {
      text: "Documentation",
      url: "/docs",
      active: "nested-url",
    },
  ],
};

// docs layout configuration
export const docsOptions: DocsLayoutProps = {
  ...baseOptions,
  tree: pageTree,
};
