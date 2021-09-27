import { createContext } from "@chakra-ui/react-utils";

import { UseTaskBoardReturn } from "./useTaskBoard";

export const [TaskBoardContext, useTaskBoardContext] =
  createContext<UseTaskBoardReturn>({
    name: "TaskBoardProvider",
  });
