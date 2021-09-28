import { useCallback, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Status, Task } from "../../types";

export interface UseTaskBoardProps {
  statuses?: Status[];
  tasks?: Task[];
}

export const useTaskBoard = (initialValues?: UseTaskBoardProps) => {
  const [statuses] = useState<Status[]>(initialValues?.statuses ?? []);
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
    (id: Status["id"]) => statuses.findIndex((status) => status.id === id),
    [statuses]
  );

  const moveTask = useCallback(
    (direction: "backward" | "forward") => (taskId: Task["id"]) => {
      editTask(taskId, (task) => {
        const currentStatusIndex = findStatusIndex(task.status);
        const nextStatus =
          statuses[currentStatusIndex + (direction === "backward" ? -1 : 1)];

        return {
          ...task,
          status: nextStatus ? nextStatus.id : task.status,
        };
      });
    },
    [editTask, findStatusIndex, statuses]
  );

  const addTask = useCallback(
    ({ description }: { description: string }) => {
      const initialStatus = statuses[0]?.id;

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
    [statuses]
  );

  const moveToLeft = moveTask("backward");

  const moveToRight = moveTask("forward");

  return {
    addTask,
    moveToLeft,
    moveToRight,
    statuses,
    tasks,
  };
};

export type UseTaskBoardReturn = ReturnType<typeof useTaskBoard>;
