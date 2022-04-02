import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Login from "../components/Login";
import Link from "next/link";
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
import { supabase } from "../utils/client";

export default function createTournament() {
  const user = supabase.auth.user();
  const [tournament, setTournament] = useState({
    name: "",
    console: "",
    date: "",
    time: "",
    signup: "",
    stream: "",
    location: "",
  });
  const { name, console, date, time, signup, stream, location } = tournament;
  async function createTournament() {
    await supabase
      .from("netplay_tourneys")
      .insert([{ name, console, date, time, signup, stream, location }])
      .single();
    setTournament({
      name: "",
      console: "",
      date: "",
      time: "",
      signup: "",
      stream: "",
      location: "",
    });
  }
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
          <Text textAlign="center">
            You must be logged in to add tournaments.{" "}
            <Link href="/login-page">
              <a>Login here</a>
            </Link>
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
              <Input
                placeholder="Tourney Name"
                value={name}
                onChange={(e) =>
                  setTournament({ ...tournament, name: e.target.value })
                }
              />
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
              <Select
                value={console}
                onChange={(e) =>
                  setTournament({ ...tournament, console: e.target.value })
                }
                placeholder="which console yo?"
              >
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
              <Input
                type="date"
                value={date}
                onChange={(e) =>
                  setTournament({ ...tournament, date: e.target.value })
                }
              />
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
              <Input
                type="time"
                value={time}
                onChange={(e) =>
                  setTournament({ ...tournament, time: e.target.value })
                }
              />
            </FormControl>
            <FormControl id="stream">
              <FormLabel
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                bgClip="text"
                fontWeight="extrabold"
                fontSize="2xl"
              >
                Stream Link
              </FormLabel>
              <Input
                type="url"
                placeholder="Stream link"
                value={stream}
                onChange={(e) =>
                  setTournament({ ...tournament, stream: e.target.value })
                }
              />
            </FormControl>
            <FormControl id="signup" isRequired>
              <FormLabel
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                bgClip="text"
                fontWeight="extrabold"
                fontSize="2xl"
              >
                Signup Link
              </FormLabel>
              <Input
                type="url"
                placeholder="signup link"
                value={signup}
                onChange={(e) =>
                  setTournament({ ...tournament, signup: e.target.value })
                }
              />
            </FormControl>
            <Button
              width="100%"
              backgroundColor="pink.500"
              onClick={createTournament}
              type="submit"
            >
              Send
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Layout>
  );
}
