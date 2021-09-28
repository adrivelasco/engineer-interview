import { useCallback, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Status, Task } from "../../types";

const initialsValues = { status: [], tasks: [] };

export interface UseTaskBoardProps {
  status?: Status[];
  tasks?: Task[];
}

export const useTaskBoard = (values?: UseTaskBoardProps) => {
  const [status] = useState<Status[]>(values?.status ?? initialsValues.status);
  const [tasks, setTasks] = useState<Task[]>(
    values?.tasks ?? initialsValues.tasks
  );

  const editTask = useCallback(
    (id: Task["id"], callback: (task: Task) => Task) => {
      setTasks((prevState) =>
        prevState.map((task) => (task.id === id ? callback(task) : task))
      );
    },
    []
  );

  const findStatusIndex = useCallback(
    (id: Status["id"]) => {
      return status.findIndex((s) => s.id === id);
    },
    [status]
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

  const moveToLeft = useCallback(
    (taskId: Task["id"]) => {
      editTask(taskId, (task) => {
        const currentStatusIndex = findStatusIndex(task.status);
        const prevStatus = status[currentStatusIndex - 1];

        return {
          ...task,
          status: prevStatus ? prevStatus.id : task.status,
        };
      });
    },
    [status, findStatusIndex, editTask]
  );

  const moveToRight = useCallback(
    (taskId: Task["id"]) => {
      editTask(taskId, (task) => {
        const currentStatusIndex = findStatusIndex(task.status);
        const nextStatus = status[currentStatusIndex + 1];

        return {
          ...task,
          status: nextStatus ? nextStatus.id : task.status,
        };
      });
    },
    [status, findStatusIndex, editTask]
  );

  return {
    addTask,
    moveToLeft,
    moveToRight,
    status,
    tasks,
  };
};

export type UseTaskBoardReturn = ReturnType<typeof useTaskBoard>;
