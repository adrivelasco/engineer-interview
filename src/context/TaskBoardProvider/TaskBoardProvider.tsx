import { ReactNode } from "react";

import { TaskBoardContext } from "./TaskBoardContext";
import { useTaskBoard, UseTaskBoardProps } from "./useTaskBoard";

export interface TaskBoardProviderProps extends UseTaskBoardProps {
  children?: ReactNode;
}

export const TaskBoardProvider = ({
  children,
  status,
  tasks,
}: TaskBoardProviderProps) => {
  const context = useTaskBoard({
    status,
    tasks,
  });

  return <TaskBoardContext value={context}>{children}</TaskBoardContext>;
};
