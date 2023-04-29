import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Skeleton,
  ChakraProvider,
  extendTheme,
} from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#f2f2f2',
      },
    },
  },
});

const HomePage = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box p={4} maxWidth="1200px" margin="0 auto">
        <Flex direction="column" alignItems="center" mt={8}>
          <Heading as="h1" size="xl">
            Welcome to My Homepage
          </Heading>
          <Text mt={4} fontSize="xl" textAlign="center">
            A responsive homepage with skeleton loading using React and Chakra UI
          </Text>
        </Flex>

        <Stack spacing={8} mt={12}>
          <Box>
            <Skeleton height="200px" />
          </Box>

          <Box>
            <Skeleton height="200px" />
          </Box>

          <Box>
            <Skeleton height="200px" />
          </Box>
        </Stack>
      </Box>
    </ChakraProvider>
  );
};

export default HomePage;
