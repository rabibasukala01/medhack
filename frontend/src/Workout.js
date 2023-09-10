import React from 'react';
import { Box, Flex, Heading, Text, Button, ChakraProvider } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import MyPage from './MyPage'
import { Link } from 'react-router-dom';

function Workout() {
  const questions = [
    'Start your guided strength training workout plan. See proper form and ensure that you are keeping you and your little ones safe',
    'Start your guided strength training workout plan. See proper form and ensure that you are keeping you and your little ones safe',
    'Start your guided strength training workout plan. See proper form and ensure that you are keeping you and your little ones safe',
  ];

  return (
    <ChakraProvider>
      <Flex
        alignItems="center"
        justifyContent="center"
        minH="100vh"
        bgGradient="linear(to-r, #F6D8AE, #FFAFCC)" 
        color="gray.800" 
      >
        <Box
          w="100%"
          maxW="800px"
          p={4}
          display="flex"
          flexDirection="column"
          alignItems="center"
          textAlign="center"
          bg="white" 
          borderRadius="lg"
          boxShadow="md"
        >
          <Heading as="h1" mb={4} fontSize="4xl">
            Start Your Workout
          </Heading>
          <Text mb={8} fontSize="lg">
            Ready to begin your guided strength training workout plan? Ensure proper form for you and your little ones' safety.
          </Text>
          <Button colorScheme="teal" size="lg">
            Start Now
          </Button>
          <Flex
            flex={1}
            flexDirection="column"
            alignItems="flex-start"
            p={4}
            textAlign="left"
            w="100%"
            mt={4}
          >
            <Link
              color="teal.500"
              mb={4}
              fontSize="lg"
              to ='/'
            >
              <ArrowBackIcon mr={2} />
              Go Back
            </Link>
            <Text color="gray.500" fontSize="lg">
              Here's How It Works
            </Text>
            <Box>
              {questions.map((question, index) => (
                <Flex key={index} alignItems="flex-start" mb={4}>
                  <Text fontWeight="bold" fontSize="xl" mr={2} color="teal.500">
                    {`${index + 1}.`}
                  </Text>
                  <Text fontSize="lg" color="gray.600">
                    {question}
                  </Text>
                </Flex>
              ))}
            </Box>
          </Flex>
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default Workout;
