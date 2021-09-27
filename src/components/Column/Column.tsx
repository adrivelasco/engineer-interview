import { Box, Flex, FlexProps, Text } from "@chakra-ui/react";

export interface ColumnProps extends FlexProps {
  title: string;
}

export const Column = ({ children, title, ...props }: ColumnProps) => (
  <Flex
    _last={{ mr: 0 }}
    flex={1}
    flexDirection="column"
    height="100%"
    mr={2}
    position="relative"
    {...props}
  >
    <Text
      borderBottom="3px solid"
      borderColor="blackAlpha.200"
      fontWeight="bold"
      mb={2}
      py={2}
    >
      {title}
    </Text>
    <Box
      bg="blackAlpha.50"
      flex={1}
      overflowY="auto"
      position="relative"
      px={2}
      py={2}
    >
      {children}
    </Box>
  </Flex>
);
