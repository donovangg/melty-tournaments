import React from "react";
import { Flex, Box, Text, Button, Link } from "@chakra-ui/react";
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
  return (
    <Flex
      key={key}
      boxShadow="xl"
      borderRadius="4px"
      flexDir="column"
      minH="280px"
      minW="320px"
      m={1}
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
          <Text fontSize="xl">Platform: {console}</Text>
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
