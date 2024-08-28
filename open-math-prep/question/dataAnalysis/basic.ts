import { QuestionType } from "@/components/question/multipleChoice";

// 1. Finding the Average
export const findingAverageQuestion1Data: QuestionType = {
  question:
    "A set of numbers has a total value of 72 and consists of 8 data points. What is the average of this set?",
  options: ["7", "8", "9", "10"],
  answer: "9",
};

export const findingAverageQuestion2Data: QuestionType = {
  question: "If the average of five numbers is 15, what is their total value?",
  options: ["60", "65", "70", "75"],
  answer: "75",
};

// 2. Average Relationships
export const averageRelationshipsQuestion1Data: QuestionType = {
  question:
    "The average score of 4 students is 82. If a new student joins the group and scores 90, what is the new average score of the 5 students?",
  options: ["82", "83", "84", "85"],
  answer: "83",
};

export const averageRelationshipsQuestion2Data: QuestionType = {
  question:
    "If the total value of 10 data points is increased by 30, and the number of data points remains the same, how does the average change?",
  options: [
    "Increases by 2",
    "Increases by 3",
    "Increases by 5",
    "Increases by 10",
  ],
  answer: "Increases by 3",
};

// 3. Multi-Step Averages
export const multiStepAveragesQuestion1Data: QuestionType = {
  question:
    "A teacher has two classes. The first class has 12 students with an average score of 75, and the second class has 18 students with an average score of 80. What is the combined average score of the students from both classes?",
  options: ["76", "77", "78", "79"],
  answer: "78",
};

export const multiStepAveragesQuestion2Data: QuestionType = {
  question:
    "In a basketball game, a player's average score for the first 4 games is 15 points per game. If the player scores 25 points in the 5th game, what is the new average score?",
  options: ["16", "17", "18", "19"],
  answer: "17",
};
