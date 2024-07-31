import { ModelDataItem } from "../../components/question/singaporeModel";

export const constantTotalQuestion1Data: ModelDataItem[] = [
  {
    subtitle: "Initial Situation",
    bars: [
      {
        segments: [{ color: "bg-blue-500", width: 55.56 }], // 10 parts out of 18 total parts
        label: "Ali",
        tooltip: "Ali: 10 parts",
      },
      {
        segments: [{ color: "bg-green-500", width: 44.44 }], // 8 parts out of 18 total parts
        label: "Billy",
        tooltip: "Billy: 8 parts",
      },
    ],
    annotation:
      "Ali and Billy have money in the ratio of 5 : 4 (scaled to 10 : 8)",
  },
  {
    subtitle: "After Ali Gives $20 to Billy",
    bars: [
      {
        segments: [
          { color: "bg-blue-500", width: 50 }, // 9 parts out of 18 total parts
          { color: "bg-gray-300", width: 5.56 }, // 1 part transferred
        ],
        label: "Ali",
        tooltip: "Ali: 9 parts ($20 less)",
      },
      {
        segments: [
          { color: "bg-green-500", width: 44.44 }, // Original 8 parts
          { color: "bg-yellow-500", width: 5.56 }, // 1 part received
        ],
        label: "Billy",
        tooltip: "Billy: 9 parts ($20 more)",
      },
    ],
    annotation:
      "After the transfer, Ali and Billy have equal amounts (9 parts each)",
  },
];
