import { useCallback, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Status, Task } from "../../types";

export const initialStatus = [
  { id: "1", name: "To Do" },
  { id: "2", name: "In Progress" },
  { id: "3", name: "Done" },
];

export const useTaskBoard = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [status] = useState<Status[]>(initialStatus);

  const editTask = (id: Task["id"], callback: (task: Task) => Task) => {
    setTasks((prevState) =>
      prevState.map((task) => {
        if (task.id === id) {
          return callback(task);
        }
        return task;
      })
    );
  };

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
      } as Task;

      setTasks((prevState) => [...prevState, task]);
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
    [status, findStatusIndex]
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
    [status, findStatusIndex]
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
