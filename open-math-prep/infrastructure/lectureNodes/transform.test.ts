import { describe, expect, beforeEach, afterEach, it, vi } from "vitest";
import { dtoToLectureStructure } from "./transform";
import { LectureStructureDto } from "./dto";
describe("dtoToLectureStructure", () => {
  it("should convert DTO to LectureStructure", () => {
    const dto:LectureStructureDto = {
      lecture1: {
        title: "Lecture 1",
        children: [],
        progress: 50,
      },
      lecture2: {
        title: "Lecture 2",
        parent: "lecture1",
        children: [],
        progress: 70,
      },
    };
    const result = dtoToLectureStructure(dto);
    expect(result).toEqual({
      lecture1: {
        title: "Lecture 1",
        children: [],
        progress: 50,
      },
      lecture2: {
        title: "Lecture 2",
        parent: "lecture1",
        children: [],
        progress: 70,
      },
    });
  });
});
