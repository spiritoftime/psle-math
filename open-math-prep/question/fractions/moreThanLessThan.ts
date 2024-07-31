import { ModelDataItem } from "@/components/question/singaporeModel";

export const moreThanLessThanQuestion1Data: ModelDataItem[] = [
  {
    subtitle: "Initial Situation",
    bars: [
      {
        segments: [{ color: "bg-blue-500", width: 57.14 }], // D / (D + 120) * 100 ≈ 57.14% (assuming D = 160)
        label: "Dan",
        tooltip: "Dan: D",
      },
      {
        segments: [
          { color: "bg-blue-500", width: 57.14 }, // D / (D + 120) * 100 ≈ 57.14%
          { color: "bg-green-500", width: 42.86 }, // 120 / (D + 120) * 100 ≈ 42.86%
        ],
        label: "James",
        tooltip: "James: D + 120",
      },
    ],
    annotation: "James has 120 more marbles than Dan",
  },
  {
    subtitle: "After Losing Marbles",
    bars: [
      {
        segments: [{ color: "bg-blue-500", width: 14.29 }], // (1/4 * D) / (D + 120) * 100 ≈ 14.29%
        label: "Dan",
        tooltip: "Dan: 1/4 × D",
      },
      {
        segments: [
          { color: "bg-blue-500", width: 45.71 }, // (4/5 * D) / (D + 120) * 100 ≈ 45.71%
          { color: "bg-green-500", width: 34.29 }, // (4/5 * 120) / (D + 120) * 100 ≈ 34.29%
        ],
        label: "James",
        tooltip: "James: 4/5 × (D + 120)",
      },
    ],
    annotation: "Dan lost 3/4 of his marbles, James lost 1/5 of his marbles",
  },
  {
    subtitle: "Comparison After Losing Marbles",
    bars: [
      {
        segments: [
          { color: "bg-blue-500", width: 45.71 },
          { color: "bg-green-500", width: 34.29 },
        ],
        label: "James",
        tooltip: "James: 4/5 × (D + 120)",
      },
      {
        segments: [
          { color: "bg-blue-500", width: 14.29 },
          { color: "bg-yellow-500", width: 65.71 }, // 184 / (D + 120) * 100 ≈ 65.71%
        ],
        label: "Dan + Difference",
        tooltip: "Dan: 1/4 × D + 184",
      },
    ],
    annotation: "The difference between James' and Dan's marbles is now 184",
  },
];
