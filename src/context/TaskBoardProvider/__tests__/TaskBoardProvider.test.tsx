import { renderHook } from "@testing-library/react-hooks";

import { useTaskBoardContext } from "../TaskBoardContext";
import {
  TaskBoardProvider,
  TaskBoardProviderProps,
} from "../TaskBoardProvider";

describe("TaskBoardProvider", () => {
  it("use(s)TaskBoardContext hook to get the actual context", () => {
    const { result } = renderHook(() => useTaskBoardContext(), {
      wrapper: ({ children }: TaskBoardProviderProps) => {
        return (
          <TaskBoardProvider
            status={[{ id: "1", name: "To Do" }]}
            tasks={[
              { id: "1", status: "1", description: "Task 1" },
              { id: "1", status: "1", description: "Task 2" },
            ]}
          >
            {children}
          </TaskBoardProvider>
        );
      },
    });

    expect(result.current.status.length).toBe(1);
    expect(result.current.tasks.length).toBe(2);

    expect(result.current.addTask).toBeDefined();
    expect(result.current.moveToLeft).toBeDefined();
    expect(result.current.moveToRight).toBeDefined();
  });
});
