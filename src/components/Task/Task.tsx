import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { Button, Flex, FlexProps, Text } from "@chakra-ui/react";

export interface TaskProps extends FlexProps {
  description: string;
  onMoveLeft?: () => void;
  onMoveRight?: () => void;
};

export const Task = ({ description, onMoveLeft, onMoveRight, ...props }: TaskProps) => (
  <Flex
    alignItems="center"
    bg="white"
    justifyContent="space-between"
    p={2}
    rounded="md"
    shadow="md"
    width="full"
    {...props}
  >
    <Button onClick={onMoveLeft} bg="red.400" colorScheme="red">
      <ArrowBackIcon />
    </Button>
    <Text>
      {description}
    </Text>
    <Button onClick={onMoveRight} bg="green.400" colorScheme="green">
      <ArrowForwardIcon />
    </Button>
  </Flex>
);