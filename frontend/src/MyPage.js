import React, {useState} from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Flex,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Image,
  ChakraProvider,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from '@chakra-ui/react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Routes,
    Link,
  } from 'react-router-dom';

import image from './pic.jpg'; 
import Workout from './Workout';


const MyPage = () => {
    const [box1Clicked, setBox1Clicked] = useState(false);
    const [box2Clicked, setBox2Clicked] = useState(false);
    const [box3Clicked, setBox3Clicked] = useState(false);


  const handleCloseModal = () => {
    setBox1Clicked(false);
    setBox2Clicked(false);
    setBox3Clicked(false);

  };

  const handleBoxClick = (boxNumber) => {
    if (boxNumber === 1) {
        setBox1Clicked(true);
    } 
    else if (boxNumber === 2) {
      setBox2Clicked(true);
    } else if (boxNumber === 3) {
      setBox3Clicked(true);
    }
  };
  return (
    <ChakraProvider>
      <Container maxW="100%" height="100vh" display="flex">
        <Box flex="1" p={4}>
          <Heading as="h1" size="2xl">
            Welcome!
          </Heading>
          <Text marginBottom="4" fontSize="lg" color="gray.600">
            Every step counts on your path to better health.
          </Text>

          <Flex justifyContent="space-between" marginBottom="4">
            <Box
              flex="1"
              textAlign="center"
              borderWidth="1px"
              p="4"
              borderRadius="lg"
              bgGradient="linear(to-r, teal.200, teal.500)"
              color="white"
              onClick={() => handleBoxClick(1)}
              cursor="pointer"
            >
                <Link to="/Workout"> 
                  <Heading as="h3" fontSize="xl" mb={2}>
                    Start Workout
                  </Heading>
                  <Text fontSize="md">Do a customized workout!</Text>
                </Link>
              {/* <Heading as="h3" fontSize="xl" mb={2}>
                Start Workout
              </Heading>
              <Text fontSize="md">Do a customized workout!</Text> */}
            </Box>
            <Box
              flex="1"
              textAlign="center"
              borderWidth="1px"
              p="4"
              borderRadius="lg"
              bgGradient="linear(to-r, orange.200, orange.500)"
              color="white"
              onClick={() => handleBoxClick(2)}
              cursor="pointer"
            >
              <Heading as="h3" fontSize="xl" mb={2}>
                Add Glucose Reading
              </Heading>
              <Text fontSize="md">Keep track of your glucose levels here!</Text>
            </Box>
            <Box
              flex="1"
              textAlign="center"
              borderWidth="1px"
              p="4"
              borderRadius="lg"
              bgGradient="linear(to-r, purple.200, purple.500)"
              color="white"
              onClick={() => handleBoxClick(3)}
              cursor="pointer"
            >
              <Heading as="h3" fontSize="xl" mb={2}>
                Add Other Workout
              </Heading>
              <Text fontSize="md">Did your own workout? Add it here!</Text>
            </Box>
          </Flex>

        <Modal isOpen={box2Clicked} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent>
            <ModalHeader>New Glucose Reading</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <Text marginBottom="4">
                What meal are you logging?
            </Text>
            <FormControl as="fieldset" marginBottom="4">
                <FormLabel as="legend">Make sure you are logging the reading 2hr post beakfast, lunch, and dinner</FormLabel>
                <RadioGroup defaultValue="option1">
                <Stack direction="column">
                    <Radio value="option1">Fasting</Radio>
                    <Radio value="option2">Breakfast</Radio>
                    <Radio value="option3">Lunch</Radio>
                    <Radio value="option4">Dinner</Radio>
                </Stack>
                </RadioGroup>
            </FormControl>
            <Text marginBottom="4">
                What is your glucose reading?
            </Text>
            <Input placeholder="Add glucose value (in mg/dl)" marginBottom="4" />
            </ModalBody>
            <ModalFooter>
            <Button colorScheme="blue" marginRight="2" onClick={handleCloseModal}>
                Close
            </Button>
            <Button colorScheme="green">Save</Button>
            </ModalFooter>
        </ModalContent>
        </Modal>

        <Modal isOpen={box3Clicked} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent>
            <ModalHeader>Add Other Workout</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <Text> Great Job! Keep the momentum going.</Text>
            <Text marginTop="4">
                What type of workout did you complete?
            </Text>
            <FormControl as="fieldset" marginBottom="4">
                <FormLabel as="legend">Remmeber, this should be any workout completed outside of the Mommy Vitals workout tool. </FormLabel>
                <RadioGroup defaultValue="option1">
                <Stack direction="column">
                    <Radio value="option1">Walking</Radio>
                    <Radio value="option2">Swimming</Radio>
                    <Radio value="option3">Plates</Radio>
                    <Radio value="option4">Yoga</Radio>
                    <Radio value="option4">Stationary Cycling</Radio>
                    <Radio value="option4">Other</Radio>
                </Stack>
                </RadioGroup>
            </FormControl>
            <Text marginBottom="4">
                How long was your workout for (in minutes)?
            </Text>
            <Input placeholder="Add workout time (in minutes)" marginBottom="4" />
            </ModalBody>
            <ModalFooter>
            <Button colorScheme="blue" marginRight="2" onClick={handleCloseModal}>
                Close
            </Button>
            <Button colorScheme="green">Save</Button>
            </ModalFooter>
        </ModalContent>
        </Modal>

          <Box
            borderWidth="1px"
            p="4"
            borderRadius="lg"
            bgGradient="linear(to-r, blue.200, blue.500)"
            color="white"
            marginBottom="4"
          >
            <Heading as="h2" size="lg" marginBottom="2">
              Glucose Activity Log
            </Heading>
            <Box marginBottom="4">
              <Box borderWidth="1px" p="4" marginBottom="4">
                <Text marginBottom="4">Recommendations</Text>
                <Flex justify="space-between">
                  <Box>
                    <Text>Fasting</Text>
                    <Text>Between 95mg/dl and 60mg/dl</Text>
                  </Box>
                  
                  <Box>
                    <Text>2 hours post meal</Text>
                    <Text>Less than 140mg/dl</Text>
                  </Box>
                </Flex>

                <Button colorScheme="whiteAlpha" marginTop="4">Download CSV</Button>
              </Box>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Date</Th>
                    <Th>Readings</Th>
                    <Th>mg/dl</Th>
                  </Tr>
                </Thead>
                <Tbody>
                <Tr>
                  <Td>Saturday, September 9, 2023</Td>
                  <Td>Fsting</Td>
                  <Td>90 mg/dl</Td>
                </Tr>
                <Tr>
                  <Td></Td>
                  <Td>Breakfast</Td>
                  <Td>150 mg/dl</Td>
                </Tr>
                <Tr>
                  <Td></Td>
                  <Td>Lunch</Td>
                  <Td>150 mg/dl</Td>
                </Tr>
                <Tr>
                  <Td></Td>
                  <Td>Dinner</Td>
                  <Td>150 mg/dl</Td>
                </Tr>
              </Tbody>
              <Tbody>
                <Tr>
                  <Td>Saturday, September 9, 2023</Td>
                  <Td>Fsting</Td>
                  <Td>90 mg/dl</Td>
                </Tr>
                <Tr>
                  <Td></Td>
                  <Td>Breakfast</Td>
                  <Td>150 mg/dl</Td>
                </Tr>
                <Tr>
                  <Td></Td>
                  <Td>Lunch</Td>
                  <Td>150 mg/dl</Td>
                </Tr>
                <Tr>
                  <Td></Td>
                  <Td>Dinner</Td>
                  <Td>150 mg/dl</Td>
                </Tr>
              </Tbody>
              </Table>
            </Box>
          </Box>
        </Box>

        <Box
          flex="1"
          p={4}
          bgGradient="linear(to-r, gray.200, gray.500)"
          borderRadius="lg"
          boxShadow="md"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Box
            borderWidth="1px"
            p="4"
            borderRadius="lg"
            bgGradient="linear(to-r, green.200, green.500)"
            color="white"
            flex="1"
            width="100%"
          >
            <Heading as="h3" fontSize="xl" marginBottom="2">
              Recommended Program
            </Heading>
            <Text >Exercise</Text>
            <Text marginBottom="2" color="grey.300">Total 3x per week</Text>
            <Text>Glucose Check</Text>
            <Text color="grey.200">Daily Glucose Monitoring including fasting and 2 hours after each meal.</Text>
          </Box>

          <Box
            width="100%"
            height="100%"
            position="relative"
            display="flex"
            alignItems="center"
            justifyContent="center"
            overflow="hidden"
          >
            <Box
              width="100%"
              height="100%"
              position="absolute"
              top="0"
              left="0"
              background={`url(${image})`}
              backgroundSize="cover"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              filter="blur(8px)"
            ></Box>
            <Image
              src={image}
              alt="Background"
              width="80%"
              height="80%"
              objectFit="cover"
              position="relative"
              zIndex="1"
            />
          </Box>
        </Box>
      </Container>
    </ChakraProvider>
    
  );
};

export default MyPage;
