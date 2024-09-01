import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { LectureNode, LectureStructure } from "@/app/domain/lectureNodes";
import {
  GetLecturesToUpdate,
  markCompletedLectureNonLoggedIn,
} from "./completeLectureButtonUseCase";

// Mocking localStorage
beforeEach(() => {
  const localStorageMock = (() => {
    let store: { [key: string]: string } = {};
    return {
      getItem: (key: string) => store[key] || null,
      setItem: (key: string, value: string) => {
        store[key] = value;
      },
      removeItem: (key: string) => {
        delete store[key];
      },
      clear: () => {
        store = {};
      },
    };
  })();
  Object.defineProperty(window, "localStorage", { value: localStorageMock });
});

afterEach(() => {
  window.localStorage.clear();
});
const lectureStructure: LectureStructure = {
  "Lecture 1": {
    title: "Lecture 1",
    parent: undefined,
    children: ["Lecture 2", "Lecture 3"],
    progress: 0,
  },
  "Lecture 2": {
    title: "Lecture 2",
    parent: "Lecture 1",
    children: [],
    progress: 0,
  },
  "Lecture 3": {
    title: "Lecture 3",
    parent: "Lecture 1",
    children: [],
    progress: 0,
  },
};
describe("GetLecturesToUpdate", () => {
  it("should get lectures to update based on parent-child structure", () => {
    window.localStorage.setItem(
      "completed-lectures",
      JSON.stringify(lectureStructure)
    );

    const result = GetLecturesToUpdate("Lecture 2");

    const expected: LectureNode[] = [
      { title: "Lecture 2", parent: "Lecture 1", children: [], progress: 100 },
      {
        title: "Lecture 1",
        parent: undefined,
        children: ["Lecture 2", "Lecture 3"],
        progress: 50,
      },
    ];

    expect(result).toEqual(expected);
  });

  it("should return empty array if lecture title does not exist", () => {
    window.localStorage.setItem(
      "completed-lectures",
      JSON.stringify(lectureStructure)
    );

    const result = GetLecturesToUpdate("lecture3");
    expect(result).toEqual([]);
  });
});

describe("markCompletedLectureNonLoggedIn", () => {
  it("should update completed lectures in localStorage", () => {
    window.localStorage.setItem(
      "completed-lectures",
      JSON.stringify(lectureStructure)
    );

    const lecturesToUpdate: LectureNode[] = [
      {
        title: "Lecture 2",
        parent: "Lecture 1",
        children: [],
        progress: 100,
      },
      {
        title: "Lecture 1",
        parent: undefined,
        children: ["Lecture 2", "Lecture 3"],
        progress: 100,
      },
    ];

    markCompletedLectureNonLoggedIn(lecturesToUpdate);

    const updatedLocalStorage = JSON.parse(
      window.localStorage.getItem("completed-lectures") || "{}"
    );

    const expectedLectureStructure: LectureStructure = {
      "Lecture 1": {
        title: "Lecture 1",
        parent: undefined,
        children: ["Lecture 2", "Lecture 3"],
        progress: 100,
      },
      "Lecture 2": {
        title: "Lecture 2",
        parent: "Lecture 1",
        children: [],
        progress: 100,
      },
      "Lecture 3": {
        title: "Lecture 3",
        parent: "Lecture 1",
        children: [],
        progress: 0,
      },
    };

    expect(updatedLocalStorage).toEqual(expectedLectureStructure);
  });
});
