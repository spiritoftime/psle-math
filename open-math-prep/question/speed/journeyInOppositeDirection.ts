import { SpeedQuestion } from "./journeyByParts";

export const journeyInOppositeDirectionQuestion1Data: SpeedQuestion = {
  questionData: {
    question:
      "At 11 AM, Tom drove from Town P to Town Q at a speed of 45 km/h while Jerry drove from Town Q to Town P at a speed of 60 km/h. Town P is 210 km from Town Q. What time will they meet?",
    options: ["2 hours", "5 hours", "6 hours", "7 hours"],
    answer: "2 hours",
  },
  journeyDiagram: {
    scenarios: [
      {
        time: "11:00 AM",
        totalDistance: 210,
        characters: [
          {
            name: "Tom",
            position: 0,
            speed: 45,
            direction: "right",
            color: "bg-blue-500",
          },
          {
            name: "Jerry",
            position: 210,
            speed: 60,
            direction: "left",
            color: "bg-green-500",
          },
        ],
        annotation: "At 11:00 AM, Tom and Jerry have not started travelling.",
        townA: "Town P",
        townB: "Town Q",
      },
      {
        time: "12:00 PM",
        totalDistance: 210,
        characters: [
          {
            name: "Tom",
            position: 45,
            speed: 45,
            direction: "right",
            color: "bg-blue-500",
          },
          {
            name: "Jerry",
            position: 150,
            speed: 60,
            direction: "left",
            color: "bg-green-500",
          },
        ],
        annotation:
          "Tom and Jerry are on their way, travelling towards each other.",
        townA: "Town P",
        townB: "Town Q",
      },
      {
        time: "1:00 PM",
        totalDistance: 210,
        characters: [
          {
            name: "Tom",
            position: 105,
            speed: 45,
            direction: "right",
            color: "bg-blue-500",
            customTooltip: "Tom meets Jerry at the midpoint",
          },
          {
            name: "Jerry",
            position: 105,
            speed: 60,
            direction: "left",
            color: "bg-green-500",
            customTooltip: "Jerry meets Tom at the midpoint",
          },
        ],
        annotation: "Tom and Jerry meet at the midpoint of their journey.",
        townA: "Town P",
        townB: "Town Q",
      },
    ],
  },
};
