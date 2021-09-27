import { Box } from "@chakra-ui/react";

import { Board } from "../Board";
import { Column } from "../Column";
import { FormCreateTask, FormFields } from "../FormCreateTask";
import { Task } from "../Task";
import { TaskBoardProvider, useTaskBoardContext } from "../TaskBoardProvider";

const ChallengeComponent = () => {
  const { tasks, status, addTask, moveToRight, moveToLeft } =
    useTaskBoardContext();

  const handleAddTask = ({ description }: FormFields) => {
    addTask({ description });
  };

  return (
    <Box px={10} py={10} height="auto">
      <Board>
        {status.map(({ id, name }, index) => {
          const tasksByStatus = tasks.filter(({ status }) => id === status);

          const isFirstColumn = index === 0;
          const isLastColumn = index === status.length - 1;

          return (
            <Column key={id} title={name}>
              {tasksByStatus.map(({ id, description }) => {
                const handleOnMoveLeft = () => {
                  moveToLeft(id);
                };

                const handleOnMoveRight = () => {
                  moveToRight(id);
                };

                return (
                  <Task
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

const ChallengeComponentWithContext = () => (
  <TaskBoardProvider>
    <ChallengeComponent />
  </TaskBoardProvider>
);

export { ChallengeComponentWithContext as ChallengeComponent };
