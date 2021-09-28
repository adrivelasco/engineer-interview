import { ReactNode } from "react";

import { TaskBoardContext } from "./TaskBoardContext";
import { useTaskBoard, UseTaskBoardProps } from "./useTaskBoard";

export interface TaskBoardProviderProps extends UseTaskBoardProps {
  children?: ReactNode;
}

export const TaskBoardProvider = ({
  children,
  statuses,
  tasks,
}: TaskBoardProviderProps) => {
  const context = useTaskBoard({
    statuses,
    tasks,
  });

  return <TaskBoardContext value={context}>{children}</TaskBoardContext>;
};
