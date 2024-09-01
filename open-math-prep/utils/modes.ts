/* eslint-disable import/no-relative-packages -- required */
import { BookOpenText, Presentation, type LucideIcon } from "lucide-react";

export interface Mode {
  param: string;
  name: string;
  description: string;
  icon: LucideIcon;
}
// {
//   topic:"psle",
// }

export const modes: Mode[] = [
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
