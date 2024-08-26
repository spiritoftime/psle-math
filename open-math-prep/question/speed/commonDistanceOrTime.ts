import { SpeedQuestion } from "./journeyByParts";

export const commonDistanceOrTimeQuestion1Data: SpeedQuestion = {
  questionData: {
    question:
      "At 7 AM, Richard started his run from Town A to Town B at an average speed of 16 km/h. 45 minutes later, Sandra started cycling from Town B to Town A at an average speed of 24 km/h. Both Richard and Sandra reached their respective destinations at the same time. What was the time taken by Richard to travel from Town A to Town B?",
    options: ["1.5 hours", "2 hours", "2.25 hours", "3 hours"],
    answer: "2.25 hours",
  },
  journeyDiagram: {
    scenarios: [
      {
        time: "7:00 AM",
        totalDistance: 36,
        characters: [
          {
            name: "Richard",
            position: 0,
            speed: 16,
            direction: "right",
            color: "bg-blue-500",
          },
        ],
        annotation: "Richard starts his run from Town A to Town B at 7 AM.",
        townA: "Town A",
        townB: "Town B",
      },
      {
        time: "7:45 AM",
        totalDistance: 36,
        characters: [
          {
            name: "Richard",
            customTooltip: "Richard travelled 12km",
            position: 12,
            speed: 16,
            direction: "right",
            color: "bg-blue-500",
          },
          {
            name: "Sandra",
            position: 36,
            speed: 24,
            direction: "left",
            color: "bg-green-500",
          },
        ],
        annotation:
          "Sandra starts cycling from Town B to Town A at 7:45 AM. Distance = 3/4h x 16km/h = 12km",
        townA: "Town A",
        townB: "Town B",
      },
      {
        time: "9:15 AM",
        totalDistance: 36,
        characters: [
          {
            name: "Richard",
            position: 34,
            speed: 16,
            direction: "right",
            color: "bg-blue-500",
          },
          {
            name: "Sandra",
            position: 0.1,
            speed: 24,
            direction: "left",
            color: "bg-green-500",
          },
        ],
        annotation:
          "Richard and Sandra reach their destinations at the same time.",
        townA: "Town A",
        townB: "Town B",
      },
    ],
  },
};
