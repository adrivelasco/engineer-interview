import { AddIcon } from "@chakra-ui/icons";
import { Button, Flex, FlexProps, Input } from "@chakra-ui/react";

export interface FormCreateTaskProps extends FlexProps {};

export const FormCreateTask = ({ ...props }: FormCreateTaskProps) => {
  return (
    <Flex alignItems="center" py={2}>
      <Input flex={1} mr={2} placeholder="Add Task" />
      <Button colorScheme="blue" type="submit">
        <AddIcon />
      </Button>
    </Flex>
  );
};