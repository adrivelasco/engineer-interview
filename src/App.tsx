import { Box, Button, ChakraProvider, Flex, Text } from '@chakra-ui/react'

import { ChallengeComponent } from './ChallengeComponent'
import './App.css'

export const App = () => (
  <ChakraProvider>
    <Box width="100%" maxWidth={1400} mx="auto" py={6}>
      <Box as="header" py={5} mb={3}>
        <Flex
          alignItems="center"
          justifyContent="space-between"
        >
          <Text fontWeight="bold" fontSize="x-large">
            Welcome To The Every.io Code Challenge.
          </Text>
          <Button
            as="a"
            bg="black"
            colorScheme="black"
            href="https://www.figma.com/proto/kd49ArXbBt0vi1kBSLkmC1/Code-Challenge?node-id=1%3A2&scaling=min-zoom&page-id=0%3A1"
            rel="noreferrer"
            target="_blank"
          >
            Checkout the Prototype
          </Button>
        </Flex>
      </Box>
      <Box
        as="main"
        border="1px solid"
        borderColor="blackAlpha.300"
        rounded="md"
        shadow="md"
      >
        <ChallengeComponent />
      </Box>
    </Box>
  </ChakraProvider>
);