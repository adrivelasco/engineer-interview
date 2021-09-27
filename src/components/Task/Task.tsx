import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { Button, Flex, FlexProps, Text } from "@chakra-ui/react";

export interface TaskProps extends FlexProps {
  description: string;
  onMoveLeft?: () => void;
  onMoveRight?: () => void;
}

export const Task = ({
  description,
  onMoveLeft,
  onMoveRight,
  ...props
}: TaskProps) => (
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
    <Button
      bg="red.400"
      colorScheme="red"
      disabled={!Boolean(onMoveLeft)}
      onClick={onMoveLeft}
    >
      <ArrowBackIcon />
    </Button>
    <Text px={2}>{description}</Text>
    <Button
      bg="green.400"
      colorScheme="green"
      disabled={!Boolean(onMoveRight)}
      onClick={onMoveRight}
    >
      <ArrowForwardIcon />
    </Button>
  </Flex>
);
