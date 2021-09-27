import { useCallback, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Status, Task } from "../../types";
import * as defaultValues from "./defaultValues";

export const useTaskBoard = () => {
  const [tasks, setTasks] = useState<Task[]>(defaultValues.tasks);
  const [status] = useState<Status[]>(defaultValues.status);

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
    ({ description }) => {
      const task = {
        id: uuidv4(),
        description,
        status: status[0].id,
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
