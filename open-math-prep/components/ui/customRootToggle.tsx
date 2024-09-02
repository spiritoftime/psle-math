"use client";
import { RootToggle } from "fumadocs-ui/components/layout/root-toggle";
import { hashMapNodes } from "@/utils/modes";
import { usePathname } from "next/navigation";

//  need to show custom root toggles for each topic.
const CustomRootToggle = () => {
  const pathname = usePathname();
  const findMatchingTopic = (path: string): string | null => {
    const pathParts = path.split("/").filter((part) => part !== "" );
    if(pathParts.length == 0 || pathParts[0] !== "topic") return null;
    let currentPath = "";
    // eg. if psle/math/lectures vs psle/math/questions.
    // it will keep checking until it finds the first match, which is psle/math. that way it will be correct toggle irregardless of whatever is beyond the path
    for (let i = 0; i < pathParts.length; i++) {
      currentPath += (i > 0 ? "/" : "") + pathParts[i];
      if (hashMapNodes[currentPath]) {
        return currentPath;
      }
    }

    return null;
  };
  const matchingTopic = findMatchingTopic(pathname);

  const getRootToggleOptions = () => {
    if (!matchingTopic || hashMapNodes[matchingTopic].modes.length == 0) {
      return null;
    }

    return hashMapNodes[matchingTopic].modes.map((mode) => ({
      url: `/topic/${mode.param}`,
      icon: (
        <mode.icon
          className="size-9 shrink-0 rounded-md bg-gradient-to-t from-fd-background/80 p-1.5"
          style={{
            backgroundColor: `hsl(var(--${mode.param
              .split("/")
              .pop()}-color)/.3)`,
            color: `hsl(var(--${mode.param.split("/").pop()}-color))`,
          }}
        />
      ),
      title: mode.name,
      description: mode.description,
    }));
  };
  const options = getRootToggleOptions();

  return options ? <RootToggle options={options} /> : null;
};
export default CustomRootToggle;
