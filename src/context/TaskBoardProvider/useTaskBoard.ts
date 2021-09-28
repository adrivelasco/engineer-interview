import { useCallback, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Status, Task } from "../../types";

export interface UseTaskBoardProps {
  status?: Status[];
  tasks?: Task[];
}

export const useTaskBoard = (initialValues?: UseTaskBoardProps) => {
  const [status] = useState<Status[]>(initialValues?.status ?? []);
  const [tasks, setTasks] = useState<Task[]>(initialValues?.tasks ?? []);

  const editTask = useCallback(
    (id: Task["id"], callback: (task: Task) => Task) => {
      setTasks((prevState) =>
        prevState.map((task) => (task.id === id ? callback(task) : task))
      );
    },
    []
  );

  const findStatusIndex = useCallback(
    (id: Status["id"]) => status.findIndex((s) => s.id === id),
    [status]
  );

  const moveTask = useCallback(
    (direction: "backward" | "forward") => (taskId: Task["id"]) => {
      editTask(taskId, (task) => {
        const currentStatusIndex = findStatusIndex(task.status);
        const nextStatus =
          status[currentStatusIndex + (direction === "backward" ? -1 : 1)];

        return {
          ...task,
          status: nextStatus ? nextStatus.id : task.status,
        };
      });
    },
    [editTask, findStatusIndex, status]
  );

  const addTask = useCallback(
    ({ description }: { description: string }) => {
      const initialStatus = status[0]?.id;

      if (!initialStatus) {
        throw new Error(
          "You should have at least one status before adding tasks"
        );
      }

      const task = {
        id: uuidv4(),
        description,
        status: initialStatus,
      };

      setTasks((prevState) => [task, ...prevState]);
    },
    [status]
  );

  const moveToLeft = moveTask("backward");

  const moveToRight = moveTask("forward");

  return {
    addTask,
    moveToLeft,
    moveToRight,
    status,
    tasks,
  };
};

export type UseTaskBoardReturn = ReturnType<typeof useTaskBoard>;
