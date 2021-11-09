import React from "react";
import Layout from "../components/Layout";

import {
  Flex,
  Box,
  Text,
  FormControl,
  Heading,
  FormLabel,
  Input,
  FormErrorMessage,
  FormHelperText,
  Textarea,
  Button,
  Select,
} from "@chakra-ui/react";

export default function createTournament() {
  return (
    <Layout>
      <Flex height="90vh" flexDir="column">
        <Box mt={12}>
          <Heading
            fontSize="5xl"
            textAlign="center"
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontWeight="extrabold"
          >
            Add Your Tournament!
          </Heading>
          <Text fontSize="xl" textAlign="center">
            Want to make something cool? Feedback on the site? Drop me a line.
          </Text>
        </Box>
        <Flex
          m="auto"
          width={["90vw", "90vw", "50vw", "50vw"]}
          justifyContent="flex-start"
          alignItems="center"
        >
          <Flex as="form" flex="1" flexDir="column" alignItems="center">
            <FormControl id="first-name" isRequired>
              <FormLabel
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                bgClip="text"
                fontWeight="extrabold"
                fontSize="2xl"
              >
                Tournament Name
              </FormLabel>
              <Input placeholder="Tourney Name" />
            </FormControl>
            <FormControl id="last-name" isRequired>
              <FormLabel
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                bgClip="text"
                fontWeight="extrabold"
                fontSize="2xl"
              >
                Platform
              </FormLabel>
              <Select placeholder="which console yo?">
                <option value="ps4/ps5">PS4/PS5</option>
                <option value="pc">PC</option>
                <option value="switch">Switch</option>
                <option value="xbox">Xbone</option>
              </Select>
            </FormControl>
            <FormControl id="date" isRequired>
              <FormLabel
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                bgClip="text"
                fontWeight="extrabold"
                fontSize="2xl"
              >
                Date
              </FormLabel>
              <Input type="date" />
            </FormControl>
            <FormControl id="time" isRequired>
              <FormLabel
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                bgClip="text"
                fontWeight="extrabold"
                fontSize="2xl"
              >
                Start Time
              </FormLabel>
              <Input type="time" />
            </FormControl>
            <FormControl id="time" isRequired>
              <FormLabel
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                bgClip="text"
                fontWeight="extrabold"
                fontSize="2xl"
              >
                Stream Link
              </FormLabel>
              <Input type="url" placeholder="Stream link" />
            </FormControl>
            <FormControl id="time" isRequired>
              <FormLabel
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                bgClip="text"
                fontWeight="extrabold"
                fontSize="2xl"
              >
                Signup Link
              </FormLabel>
              <Input type="url" placeholder="signup link" />
            </FormControl>
            <Button width="100%" backgroundColor="pink.500" type="submit">
              Send
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Layout>
  );
}
