import { Box } from "@chakra-ui/react";

import { Board } from "../Board";
import { Column } from "../Column";
import { FormCreateTask } from "../FormCreateTask";
import { Task } from "../Task";

export const ChallengeComponent = () => {
  return (
    <Box px={10} py={10} height="auto">
      <Board>
        <Column title="To Do">
          <Task description="Move the land" />
        </Column>
        <Column title="In Progress">
          <Task description="Move the land" />
        </Column>
        <Column title="Done">
          <Task description="Move the land" />
        </Column>
      </Board>

      <Box position="relative" maxWidth={400}>
        <FormCreateTask />
      </Box>
    </Box>
  );
};
