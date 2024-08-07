import {
  describe,
  expect,
  beforeEach,
  afterEach,
  it,
  vi,
} from "vitest";
import { lectureNodeService } from "./service";
import { LectureStructure } from "@/app/domain/lectureNodes";

describe("updateLocalStorage", () => {
  beforeEach(() => {
    // Mock localStorage
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
    // Clear localStorage after each test
    window.localStorage.clear();
  });

  it("should update localStorage with new lecture structure", () => {
    const lectureStructure: LectureStructure = {
      lecture1: { progress: 50, title: "Lecture 1" },
      lecture2: { progress: 70, title: "Lecture 2" },
    };

    lectureNodeService.updateLocalStorage(lectureStructure);

    const updatedLocalStorage = JSON.parse(
      window.localStorage.getItem("completed-lectures") || "{}"
    );
    expect(updatedLocalStorage).toEqual(lectureStructure);
  });

  it("should remove lectures not present in the new structure", () => {
    window.localStorage.setItem(
      "completed-lectures",
      JSON.stringify({
        lecture1: { progress: 50, title: "Lecture 1" },
        lecture3: { progress: 80, title: "Lecture 3" },
      })
    );

    const lectureStructure: LectureStructure = {
      lecture1: { progress: 50, title: "Lecture 1" },
      lecture2: { progress: 70, title: "Lecture 2" },
    };

    lectureNodeService.updateLocalStorage(lectureStructure);

    const updatedLocalStorage = JSON.parse(
      window.localStorage.getItem("completed-lectures") || "{}"
    );
    expect(updatedLocalStorage).toEqual({
      lecture1: { progress: 50, title: "Lecture 1" },
      lecture2: { progress: 70, title: "Lecture 2" },
    });
  });

  it("should not overwrite existing lectures in localStorage", () => {
    window.localStorage.setItem(
      "completed-lectures",
      JSON.stringify({
        lecture1: { progress: 50, title: "Lecture 1" },
      })
    );

    const lectureStructure: LectureStructure = {
      lecture1: { progress: 60, title: "Lecture 1" },
    };

    lectureNodeService.updateLocalStorage(lectureStructure);

    const updatedLocalStorage = JSON.parse(
      window.localStorage.getItem("completed-lectures") || "{}"
    );
    expect(updatedLocalStorage.lecture1.progress).toBe(50);
  });

  it('should dispatch "lecturesUpdated" event', () => {
    const dispatchEventSpy = vi.spyOn(window, "dispatchEvent");

    const lectureStructure: LectureStructure = {
      lecture1: { progress: 50, title: "Lecture 1" },
    };

    lectureNodeService.updateLocalStorage(lectureStructure);

    expect(dispatchEventSpy).toHaveBeenCalledWith(new Event("lecturesUpdated"));
  });

});
