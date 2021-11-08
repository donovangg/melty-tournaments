import React from "react";
import Layout from "../components/Layout";
import { supabase } from "../utils/client";
import { useEffect, useState } from "react";
import { Flex, Box, Text, Button, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import TourneyCard from "../components/TourneyCard";
import { FaPlusSquare } from "react-icons/fa";

export default function tournaments() {
  const [tournaments, setTournaments] = useState([]);
  useEffect(() => {
    fetchTourneys();
  }, []);

  async function fetchTourneys() {
    const { data } = await supabase.from("netplay_tourneys").select();
    setTournaments(data);
  }
  console.log(tournaments);
  // chakra
  const bg = useColorModeValue("white.500", "gray.900");
  const color = useColorModeValue("gray.800", "white");
  return (
    <Layout>
      <Flex minH="100vh" bg={bg} color={color}>
        <Flex
          flexDir="column"
          border="2px"
          m="auto"
          w="75%"
          alignItems="flex-start"
          justifyContent="flex-start"
        >
          <Text
            as="h1"
            my={12}
            textAlign={["center", "center", "left", "left"]}
            fontSize="6xl"
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontWeight="extrabold"
          >
            Tournaments
          </Text>
          <Box mb={12}>
            <Button
              justifyContent="center"
              alignContent="center"
              rightIcon={<FaPlusSquare />}
              background="transparent"
              p={3}
              border="1px"
              borderColor="pink.400"
              _hover={{ background: "pink.400" }}
            >
              Add Tournament
            </Button>
          </Box>
          <Flex
            flexWrap="wrap"
            justifyContent={["center", "center", "center", "flex-start"]}
          >
            {tournaments.map((tourney) => (
              <TourneyCard
                key={tourney.id}
                name={tourney.name}
                console={tourney.console}
                signup={tourney.signup}
                stream={tourney.stream}
                date={tourney.date}
                time={tourney.time}
                location={tourney.location}
              />
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Layout>
  );
}
