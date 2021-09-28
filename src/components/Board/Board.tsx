import { Flex, FlexProps } from "@chakra-ui/react";

export const Board = ({ ...props }: FlexProps) => (
  <Flex
    flexDirection={{ base: "column", md: "row" }}
    height={{ base: "1200px", md: "500px" }}
    py={2}
    w="full"
    {...props}
  />
);
