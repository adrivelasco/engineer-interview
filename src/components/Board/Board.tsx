import { Flex, FlexProps } from "@chakra-ui/react";

export const Board = ({ ...props }: FlexProps) => (
  <Flex
    py={2}
    height={{ base: "1200px", md: "500px" }}
    w="full"
    flexDirection={{ base: "column", md: "row" }}
    {...props}
  />
);
