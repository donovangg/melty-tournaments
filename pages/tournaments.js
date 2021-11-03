import React from "react";
import Layout from "../components/Layout";
import { supabase } from "../utils/client";
import { useEffect, useState } from "react";
import { Flex, Box, Text, Button } from "@chakra-ui/react";
import Link from "next/link";
import TourneyCard from "../components/TourneyCard";

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
  return (
    <Layout>
      <Flex
        flexDir="column"
        m="auto"
        w="75%"
        justifyContent="center"
        border="2px"
      >
        <Text as="h1" fontSize="6xl">
          Tournaments
        </Text>
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
            />
          ))}
        </Flex>
      </Flex>
    </Layout>
  );
}
