import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type Segment = {
  color: string;
  width: number;
};

type Bar = {
  segments: Segment[];
  label: string;
  tooltip: string;
};

type ModelDataItem = {
  subtitle: string;
  bars: Bar[];
  annotation?: string;
};

type SingaporeModelProps = {
  title: string;
  models: ModelDataItem[];
};

export const SingaporeModel: React.FC<SingaporeModelProps> = ({
  title,
  models,
}) => {
  return (
    <TooltipProvider>
      <div className="max-w-3xl px-4 mx-auto text-muted-foreground">
        <h2 className="mt-0 mb-4 text-2xl font-bold ">{title}</h2>
        {models.map((model, index) => (
          <div key={index} className="mb-8">
            <h3 className="mb-2 text-xl font-semibold ">{model.subtitle}</h3>
            <div className="space-y-2">
              {model.bars.map((bar, barIndex) => (
                <Tooltip key={barIndex}>
                  <TooltipTrigger asChild>
                    <div className="flex items-center cursor-help">
                      <span className="w-16 text-sm whitespace-nowrap">
                        {bar.label}
                      </span>
                      <div className="flex w-full h-8 mr-2">
                        {bar.segments.map((segment, segmentIndex) => (
                          <div
                            key={segmentIndex}
                            className={`h-full ${segment.color}`}
                            style={{ width: `${segment.width}%` }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{bar.tooltip}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
            {model.annotation && (
              <p className="mt-2 text-sm ">{model.annotation}</p>
            )}
          </div>
        ))}
      </div>
    </TooltipProvider>
  );
};

const MoneyRatioProblem: React.FC = () => {
  return (
    <div>
      <SingaporeModel
        title="Singapore Model Method: Money Ratio Problem (Constant Total Concept)"
        models={moneyModelData}
      />
      <div className="p-4 mt-4 bg-gray-100 rounded-md">
        <h3 className="mb-2 text-lg font-semibold">Solution:</h3>
        <p>1. Initial ratio: Ali : Billy = 5 : 4</p>
        <p>2. Scale up the ratio: 5 : 4 = 10 : 8 (Total 18 parts)</p>
        <p>3. After transfer: 9 : 9 (Total remains 18 parts)</p>
        <p>4. Difference in Ali's money: 10 - 9 = 1 part</p>
        <p>5. 1 part = $20</p>
        <p>6. Billy's final amount: 9 parts = 9 × $20 = $180</p>
        <p className="mt-2 font-bold">Therefore, Billy has $180 in the end.</p>
      </div>
    </div>
  );
};

// export default MoneyRatioProblem;
export const moneyModelData: ModelDataItem[] = [
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
export const marbelsModelData: ModelDataItem[] = [
  {
    subtitle: "Initial Situation",
    bars: [
      {
        segments: [{ color: "bg-blue-500", width: 100 }],
        label: "Dan",
        tooltip: "Dan: D",
      },
      {
        segments: [
          { color: "bg-red-500", width: 57.14 }, // 160 / 280 * 100 ≈ 57.14%
          { color: "bg-green-500", width: 42.86 }, // 120 / 280 * 100 ≈ 42.86%
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
        segments: [{ color: "bg-blue-500", width: 25 }],
        label: "Dan",
        tooltip: "Dan: 1/4 × D",
      },
      {
        segments: [{ color: "bg-red-500", width: 80 }],
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
        segments: [{ color: "bg-red-500", width: 100 }],
        label: "James",
        tooltip: "James: 4/5 × (D + 120)",
      },
      {
        segments: [
          { color: "bg-blue-500", width: 17.86 }, // 40 / 224 * 100 ≈ 17.86%
          { color: "bg-green-500", width: 82.14 }, // 184 / 224 * 100 ≈ 82.14%
        ],
        label: "Dan",
        tooltip: "Dan: 1/4 × D + 184",
      },
    ],
    annotation: "The difference between James' and Dan's marbles is now 184",
  },
];

const MarblesProblem: React.FC = () => {
  return (
    <SingaporeModel
      title="Singapore Model Method: Marble Problem"
      models={marbelsModelData}
    />
  );
};
