import React from "react";
import {
  Flex,
  Box,
  Text,
  Button,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaExternalLinkAlt, FaTwitch, FaInfoCircle } from "react-icons/fa";

export default function TourneyCard({
  key,
  name,
  console,
  signup,
  stream,
  date,
  time,
}) {
  const bg = useColorModeValue("white.500", "gray.800");
  const color = useColorModeValue("gray.800", "gray.300");
  return (
    <Flex
      key={key}
      borderTop="4px"
      borderColor="pink.400"
      boxShadow="xl"
      borderRadius="4px"
      flexDir="column"
      minH="280px"
      width="310px"
      bg={bg}
      color={color}
      m={2}
      p={2}
    >
      <Flex flexDir="column" justifyContent="center" height="100%">
        <Flex p={2} flex="2" alignItems="center">
          <Text as="h2" fontSize="3xl">
            {name}
          </Text>
        </Flex>
        <Flex flex="1" p={2} flexDir="column">
          <Text fontSize="xl">
            Starts: {date} @ {time}
          </Text>
          <Text fontSize="xl" my={1}>
            Platform: {console}
          </Text>
          <Flex alignItems="center">
            <Link href={signup} fontSize="xl" isExternal>
              <FaInfoCircle />
            </Link>
            <Link href={stream} mx={1} fontSize="xl" isExternal>
              <FaTwitch />
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
