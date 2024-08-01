import { BranchData } from "@/components/question/remainderBranch";

export const remainderMethodQuestion1BranchData: BranchData = {
  id: "1",
  label: "Total",
  children: [
    {
      id: "2",
      label: "Books",
      calculation: "\\frac{3}{5}",
    },
    {
      id: "3",
      label: "Remainder",
      calculation: "1 - \\frac{3}{5} = \\frac{2}{5}",
      children: [
        {
          id: "4",
          label: "Wallet",
          calculation: "\\frac{1}{3}",
        },
        {
          id: "5",
          label: "Leftover",
          calculation: "1 - \\frac{1}{3} = \\frac{2}{3}",
        },
      ],
    },
  ],
};
export const remainderMethodQuestion2BranchData: BranchData = {
  id: "1",
  label: "Total Books",
  children: [
    {
      id: "2",
      label: "English Books",
      calculation: "\\frac{5}{8}",
      children: [
        {
          id: "3",
          label: "Fiction Books",
          calculation: "\\frac{1}{2} \\times \\frac{5}{8} = \\frac{5}{16}",
        },
        {
          id: "4",
          label: "Non-Fiction Books",
          calculation: "\\frac{1}{2} \\times \\frac{5}{8} = \\frac{5}{16}",
        },
      ],
    },
    {
      id: "5",
      label: "Non-English Books",
      calculation: "1 - \\frac{5}{8} = \\frac{3}{8}",
      children: [
        {
          id: "6",
          label: "Fiction Non English Books",
          calculation: "\\frac{1}{2} \\times \\frac{5}{8} = \\frac{5}{16}",
        },
        {
          id: "7",
          label: "Non-Fiction Non English Books",
          calculation: "\\frac{1}{2} \\times \\frac{5}{8} = \\frac{5}{16}",
        },
      ],
    },
  ],
};
