import { Box } from "@chakra-ui/react";

import {
  TaskBoardProvider,
  TaskBoardProviderProps,
  useTaskBoardContext,
} from "../../context/TaskBoardProvider";
import { Board } from "../Board";
import { Column } from "../Column";
import { FormCreateTask, FormFields } from "../FormCreateTask";
import { Task } from "../Task";
import * as mocks from "./mocks";

const ChallengeComponent = () => {
  const { tasks, statuses, addTask, moveToRight, moveToLeft } =
    useTaskBoardContext();

  const handleAddTask = ({ description }: FormFields) => {
    addTask({ description });
  };

  return (
    <Box
      display={{ base: "flex", md: "block" }}
      flexDirection={{ base: "column-reverse", md: "initial" }}
      height="auto"
      p={{ base: 4, md: 10 }}
      width="100%"
    >
      <Board data-testid="board">
        {statuses.map(({ id, name }, index) => {
          const tasksByStatus = tasks.filter(({ status }) => id === status);

          const isFirstColumn = index === 0;
          const isLastColumn = index === statuses.length - 1;

          return (
            <Column key={id} title={name} data-testid="board-column-status">
              {tasksByStatus.map(({ id, description }) => {
                const handleOnMoveLeft = () => {
                  moveToLeft(id);
                };

                const handleOnMoveRight = () => {
                  moveToRight(id);
                };

                return (
                  <Task
                    data-testid="board-task"
                    description={description}
                    key={id}
                    mb={2}
                    onMoveLeft={!isFirstColumn ? handleOnMoveLeft : undefined}
                    onMoveRight={!isLastColumn ? handleOnMoveRight : undefined}
                  />
                );
              })}
            </Column>
          );
        })}
      </Board>
      <Box position="relative" maxWidth={400}>
        <FormCreateTask onSubmit={handleAddTask} />
      </Box>
    </Box>
  );
};

const ChallengeComponentContainer = (props: TaskBoardProviderProps) => {
  const statuses = props.statuses ?? mocks.statuses;
  const tasks = props.tasks ?? mocks.tasks;

  return (
    <TaskBoardProvider tasks={tasks} statuses={statuses}>
      <ChallengeComponent />
    </TaskBoardProvider>
  );
};

export { ChallengeComponentContainer as ChallengeComponent };
