import {
  MultipleChoiceQuestionProps,
  QuestionType,
} from "@/components/question/multipleChoice";
import {
  JourneyDiagramProps,
  Scenario,
} from "@/components/question/speedJourney";

export interface SpeedQuestion {
  questionData: QuestionType;
  journeyDiagram: JourneyDiagramProps;
}
export const journeyByPartQuestion1Data: SpeedQuestion = {
  questionData: {
    question:
      "If Alex runs at 5 km/h for 3 hours and cycles at 8 km/h for the remaining distance, how long does it take him to complete a 39 km journey?",
    options: ["4 hours", "5 hours", "6 hours", "7 hours"],
    answer: "6 hours",
  },  journeyDiagram: {
    scenarios: [
      {
        time: "0:00",
        totalDistance: 39,
        characters: [
          {
            name: "Alex",
            position: 0,
            speed: 5,
            direction: "right",
            color: "bg-blue-500",
          },
        ],
        annotation: "Alex starts his journey, running at 5 km/h.",
        townA: "Start",
        townB: "Finish",
      },
      {
        time: "3:00",
        totalDistance: 39,
        characters: [
          {
            name: "Alex",
            position: 15,
            speed: 8,
            direction: "right",
            color: "bg-green-500",
          },
        ],
        annotation: "After 3 hours, Alex switches to cycling at 8 km/h.",
        townA: "Start",
        townB: "Finish",
      },
      {
        time: "6:00",
        totalDistance: 39,
        characters: [
          {
            name: "Alex",
            position: 39,
            speed: 0,
            direction: "right",
            color: "bg-red-500",
          },
        ],
        annotation:
          "Alex completes his journey after 6 hours, with an average speed of 6.5 km/h.",
        townA: "Start",
        townB: "Finish",
      },
    ],
  },

};
