import { act } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";

import { useTaskBoard } from "../useTaskBoard";

describe("useTaskBoard", () => {
  it("should return empty statuses and tasks", () => {
    const { result } = renderHook(() => useTaskBoard());

    expect(result.current.status.length).toBe(0);
    expect(result.current.tasks.length).toBe(0);
  });

  it("should return valid statuses and tasks", () => {
    const { result } = renderHook(() =>
      useTaskBoard({
        status: [{ id: "1", name: "To Do" }],
        tasks: [{ id: "1", status: "1", description: "Test" }],
      })
    );

    expect(result.current.status[0].name).toBe("To Do");
    expect(result.current.tasks[0].description).toBe("Test");
  });

  it("should add a task", () => {
    const { result } = renderHook(() =>
      useTaskBoard({
        status: [{ id: "1", name: "To Do" }],
      })
    );

    act(() => {
      result.current.addTask({
        description: "New Task",
      });
    });

    expect(result.current.tasks.length).toBe(1);
    expect(result.current.tasks[0].status).toBe("1");
  });

  it("should fail when adding task due empty statuses", () => {
    const { result } = renderHook(() => useTaskBoard());

    const addTask = () => {
      result.current.addTask({ description: "New Task" });
    };

    expect(addTask).toThrow(Error);
  });

  it("should move task to left status", () => {
    const { result } = renderHook(() =>
      useTaskBoard({
        status: [
          { id: "1", name: "To Do" },
          { id: "2", name: "In Progress" },
          { id: "3", name: "QA" },
        ],
        tasks: [{ id: "1", status: "2", description: "Test" }],
      })
    );

    act(() => {
      const taskId = result.current.tasks[0].id;
      result.current.moveToLeft(taskId);
    });

    expect(result.current.tasks[0].status).toBe("1");
  });

  it("should move task to next status", () => {
    const { result } = renderHook(() =>
      useTaskBoard({
        status: [
          { id: "1", name: "To Do" },
          { id: "2", name: "In Progress" },
          { id: "3", name: "QA" },
        ],
        tasks: [{ id: "1", status: "2", description: "Test" }],
      })
    );

    act(() => {
      const taskId = result.current.tasks[0].id;
      result.current.moveToRight(taskId);
    });

    expect(result.current.tasks[0].status).toBe("3");
  });

  it("should return the same status if there is no more statuses", () => {
    const { result } = renderHook(() =>
      useTaskBoard({
        status: [{ id: "1", name: "To Do" }],
        tasks: [{ id: "1", status: "2", description: "Test" }],
      })
    );

    act(() => {
      const taskId = result.current.tasks[0].id;
      result.current.moveToRight(taskId);
    });

    expect(result.current.tasks[0].status).toBe("1");
  });
});
