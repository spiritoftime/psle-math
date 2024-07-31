import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import React from "react";
export type Segment = {
  color: string;
  width: number;
};

export type Bar = {
  segments: Segment[];
  label: string;
  tooltip: string;
  justifyContent?: string;

};

export type ModelDataItem = {
  subtitle: string;
  bars: Bar[];
  annotation?: string;
};

export type SingaporeModelProps = {
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
            <div className={`space-y-2  `}>
              {model.bars.map((bar, barIndex) => (
                <Tooltip key={barIndex}>
                  <TooltipTrigger asChild>
                    <div className="flex items-center cursor-help">
                      <span className="w-24 text-sm ">{bar.label}</span>
                      <div className={`flex w-full h-8 mr-2 ${bar.justifyContent}`}>
                        {bar.segments.map((segment, segmentIndex) => (
                          <div
                            key={`${segment}${segmentIndex}`}
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
              <p className="mt-2 text-sm mx-auto text-center italic">
                {model.annotation}
              </p>
            )}
          </div>
        ))}
      </div>
    </TooltipProvider>
  );
};
