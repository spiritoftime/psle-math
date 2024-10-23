/* eslint-disable import/no-relative-packages -- required */
import { BookOpenText, Presentation, type LucideIcon } from "lucide-react";

export interface Mode {
  param: string;
  name: string;
  description: string;
  icon: LucideIcon;
}
interface HashMapNode {
  modes: Mode[];
}
// modes for psle math - create new modes for new academic content if needed

const psleMathModes: Mode[] = [
  {
    param: "psle/math/lectures",
    name: "Lectures",
    description: "Lectures",
    icon: Presentation,
  },
  {
    param: "psle/math/questions",
    name: "Questions",
    description: "Practice Questions",
    icon: BookOpenText,
  },
];

export const hashMapNodes: Record<string, HashMapNode> = {
  "topic/finance": {
    modes: [],
  },
  "topic/reflection": {
    modes: [],
  },
  "topic/fitness": {
    modes: [],
  },
  "topic/psle/math": {
    // add the modes here
    modes: psleMathModes,
  },
};
