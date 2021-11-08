import React from "react";
import Layout from "../components/Layout";
import { Flex, Box, Text, Button } from "@chakra-ui/react";
import { supabase } from "../utils/client";
import { useEffect, useState } from "react";

export default function results() {
  const [results, setResults] = useState([]);
  useEffect(() => {
    fetchResults();
  }, []);

  async function fetchResults() {
    const { data } = await supabase.from("results").select();
    setResults(data);
  }
  console.log(results);
  return (
    <Layout>
      <Flex flexDir="column">
        <Text
          as="h1"
          my={12}
          textAlign={["center", "center", "left", "left"]}
          fontSize="6xl"
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontWeight="extrabold"
        >
          Results
        </Text>
        <Flex>
          {results.map((result) => (
            <Flex flexDir="column">
              <Text>{result.tournament_name}</Text>
              <Text>1st {result.p1}</Text>
              <Text>2nd {result.p2}</Text>
              <Text>3rd {result.p3}</Text>
              <Text>MikeRossPlace {result.p4}</Text>
              <Text>5th {result.p5}</Text>
              <Text>5th {result.p6}</Text>
              <Text>7th {result.p7}</Text>
              <Text>7th {result.p8}</Text>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Layout>
  );
}
