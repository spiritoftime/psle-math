import { ModelDataItem } from "@/components/question/singaporeModel";
export const ComparisonModelQuestion1Data: ModelDataItem[] = [
  {
    subtitle: "Initial Situation",
    bars: [
      {
        segments: [{ color: "bg-blue-500", width: 52.38 }], // 825 / (825 + 750) * 100 ≈ 52.38%
        label: "Jug A",
        tooltip: "Jug A: 825ml",
      },
      {
        segments: [
          { color: "bg-blue-500", width: 52.38 }, // 825 / (825 + 750) * 100 ≈ 52.38%
          { color: "bg-green-500", width: 47.62 }, // 750 / (825 + 750) * 100 ≈ 47.62%
        ],
        label: "Jug B",
        tooltip: "Jug B: 825ml + 750ml",
      },
    ],
    annotation: "Jug B has 750ml more milk than Jug A",
  },
  {
    subtitle: "Comparison of Jugs",
    bars: [
      {
        segments: [{ color: "bg-blue-500", width: 52.38 }], // 825 / (825 + 750) * 100 ≈ 52.38%
        label: "Jug A",
        tooltip: "Jug A: 825ml",
      },
      {
        segments: [
          { color: "bg-blue-500", width: 52.38 },
          { color: "bg-green-500", width: 47.62 },
        ],
        label: "Jug B",
        tooltip: "Jug B: 1575ml (825ml + 750ml)",
      },
    ],
    annotation: "Total milk in both jugs: 825ml + 1575ml = 2400ml",
  },
];
export const partWholeQuestion1Data: ModelDataItem[] = [
  {
    subtitle: "Total Concert Attendance",
    bars: [
      {
        segments: [
          { color: "bg-blue-500", width: 61.16 }, // 1529 / 2500 * 100 = 61.16%
          { color: "bg-green-500", width: 38.84 }, // (2500 - 1529) / 2500 * 100 = 38.84%
        ],
        label: "Attendees",
        tooltip: "Total Attendees: 2500 (1529 Adults + 971 Children)",
      },
    ],
    annotation: "2500 total attendees: 1529 adults and 971 children",
  },
  {
    subtitle: "Children Breakdown",

    bars: [
      {
        justifyContent: "justify-end",

        segments: [
          { color: "bg-yellow-500", width: (54.48 * 38.84) / 100 }, // 529 / 971 * 100 = 54.48%
          { color: "bg-pink-500", width: (45.52 * 38.84) / 100 }, // (971 - 529) / 971 * 100 = 45.52%
        ],
        label: "Children",
        tooltip: "Children: 971 (529 Boys + 442 Girls)",
      },
    ],
    annotation: "Out of 971 children, 529 are boys hence 442 are girls (971 - 529)",
  },
  {
    subtitle: "Overall Breakdown",
    bars: [
      {
        segments: [
          { color: "bg-blue-500", width: 61.16 }, // 1529 / 2500 * 100 = 61.16%
          { color: "bg-yellow-500", width: 21.16 }, // 529 / 2500 * 100 = 21.16%
          { color: "bg-pink-500", width: 17.68 }, // 442 / 2500 * 100 = 17.68%
        ],
        label: "All Attendees",
        tooltip: "Total: 2500 (1529 Adults, 529 Boys, 442 Girls)",
      },
    ],
    annotation: "1529 adults, 529 boys, and 442 girls",
  },
];
