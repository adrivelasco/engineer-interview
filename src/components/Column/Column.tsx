import { Box, Flex, FlexProps, Text } from "@chakra-ui/react";

export interface ColumnProps extends FlexProps {
  title: string;
}

export const Column = ({ children, title, ...props }: ColumnProps) => (
  <Flex
    flex={1}
    flexDirection="column"
    height="100%"
    mr={{ base: 0, md: 2 }}
    mb={{ base: 3, md: 0 }}
    position="relative"
    _last={{ mr: 0, mb: 0 }}
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
