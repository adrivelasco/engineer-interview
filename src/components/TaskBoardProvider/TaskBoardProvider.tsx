import { ReactNode } from "react";

import { TaskBoardContext } from "./TaskBoardContext";
import { useTaskBoard } from "./useTaskBoard";

export interface TaskBoardProviderProps {
  children: ReactNode;
}

export const TaskBoardProvider = ({ children }: TaskBoardProviderProps) => {
  const context = useTaskBoard();

  return <TaskBoardContext value={context}>{children}</TaskBoardContext>;
};
