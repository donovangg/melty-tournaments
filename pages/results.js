import React from "react";
import Layout from "../components/Layout";
import { Flex, Box, Text, Button } from "@chakra-ui/react";
import { supabase } from "../utils/client";
import { useEffect, useState } from "react";
import Login from "../components/Login";

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
      <Flex minH="100vh">
        <Flex flexDir="column" m="auto" w="70%" justifyContent="center">
          <Text
            as="h1"
            textAlign={["center", "center", "left", "left"]}
            fontSize="6xl"
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontWeight="extrabold"
            p={4}
          >
            Results
          </Text>
          <Flex>
            {results.map((result) => (
              <Flex
                flexDir="column"
                justifyContent="space-between"
                flexWrap="wrap"
              >
                <Text
                  as="h2"
                  fontSize="4xl"
                  color="pink.500"
                  fontWeight="semibold"
                  p={4}
                >
                  {result.tournament_name}
                </Text>
                <Flex alignItems="center" p={4}>
                  <Text fontSize="2xl">1</Text>{" "}
                  <Text fontSize="2xl" ml={3}>
                    {result.p1}
                  </Text>
                </Flex>
                <Flex alignItems="center" p={4}>
                  <Text fontSize="2xl">2</Text>{" "}
                  <Text fontSize="2xl" ml={3}>
                    {result.p2}
                  </Text>
                </Flex>
                <Flex alignItems="center" p={4}>
                  <Text fontSize="2xl">3</Text>{" "}
                  <Text fontSize="2xl" ml={3}>
                    {result.p3}
                  </Text>
                </Flex>
                <Flex alignItems="center" p={4}>
                  <Text fontSize="2xl">Miek</Text>{" "}
                  <Text fontSize="2xl" ml={3}>
                    {result.p4}
                  </Text>
                </Flex>
                <Flex alignItems="center" p={4}>
                  <Text fontSize="2xl">5</Text>{" "}
                  <Text fontSize="2xl" ml={3}>
                    {result.p5}
                  </Text>
                </Flex>
                <Flex alignItems="center" p={4}>
                  <Text fontSize="2xl">5</Text>{" "}
                  <Text fontSize="2xl" ml={3}>
                    {result.p6}
                  </Text>
                </Flex>
                <Flex alignItems="center" p={4}>
                  <Text fontSize="2xl">7</Text>{" "}
                  <Text fontSize="2xl" ml={3}>
                    {result.p7}
                  </Text>
                </Flex>
                <Flex alignItems="center" p={4}>
                  <Text fontSize="2xl">7</Text>{" "}
                  <Text fontSize="2xl" ml={3}>
                    {result.p8}
                  </Text>
                </Flex>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Layout>
  );
}
