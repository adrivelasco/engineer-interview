import { Flex, FlexProps } from "@chakra-ui/react";

export const Board = ({ ...props }: FlexProps) => (
  <Flex py={2} height="500px" w="full" {...props} />
);