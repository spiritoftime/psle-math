"use client";
import React, { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

const DEFAULT_ANIMATION_DURATION = 1000;

export interface Character {
  name: string;
  position: number;
  speed: number;
  direction: "left" | "right";
  color: string;
  customTooltip?: string;
}

export interface Scenario {
  time: string;
  totalDistance: number;
  characters: Character[];
  annotation: string;
  townA: string;
  townB: string;
}

export interface JourneyDiagramProps {
  scenarios: Scenario[];
  animationDuration?: number;
}

export const JourneyDiagram: React.FC<JourneyDiagramProps> = ({
  scenarios,
  animationDuration = DEFAULT_ANIMATION_DURATION,
}) => {
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleScenarioChange = (increment: number) => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentScenarioIndex((prevIndex) => {
        const newIndex = prevIndex + increment;
        return Math.max(0, Math.min(newIndex, scenarios.length - 1));
      });
      setTimeout(() => setIsAnimating(false), animationDuration);
    }
  };

  const handleNext = () => handleScenarioChange(1);
  const handlePrev = () => handleScenarioChange(-1);

  const currentScenario = scenarios[currentScenarioIndex];

  const renderCharacter = (char: Character) => (
    <TooltipProvider key={char.name}>
      <Tooltip>
        <TooltipTrigger>
          <div
            className={`absolute top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full ${char.color} transition-all `}
            style={{
              left: `${(char.position / currentScenario.totalDistance) * 100}%`,
              opacity:
                char.position === 0 ||
                char.position === currentScenario.totalDistance
                  ? 0
                  : 1,
              transitionDuration: `${animationDuration}ms`,
            }}
          />
        </TooltipTrigger>
        <TooltipContent>
          <p>
            {char.customTooltip ||
              `${char.name} travelling at ${char.speed}km/h`}
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );

  return (
    <div className="w-full max-w-3xl mx-auto p-4 bg-muted-foreground text-background rounded-lg shadow-md">
      <h2 className="text-2xl font-bold my-2">{currentScenario.time}</h2>
      <div className="relative h-20 bg-gray-300 rounded-full overflow-hidden mb-4">
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between px-4">
          <span className="font-semibold">{currentScenario.townA}</span>
          <span className="font-semibold">{currentScenario.townB}</span>
        </div>
        {currentScenario.characters.map(renderCharacter)}
      </div>
      <div className="flex justify-between mb-4">
        <span>0 km</span>
        <span>{currentScenario.totalDistance} km</span>
      </div>
      <p className="text-center mb-4 italic">{currentScenario.annotation}</p>
      <div className="flex justify-between">
        <Button
          onClick={handlePrev}
          disabled={currentScenarioIndex === 0 || isAnimating}
        >
          Previous
        </Button>
        <Button
          onClick={handleNext}
          disabled={
            currentScenarioIndex === scenarios.length - 1 || isAnimating
          }
        >
          Next
        </Button>
      </div>
    </div>
  );
};
