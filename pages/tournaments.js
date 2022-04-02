import React from "react";
import Layout from "../components/Layout";
import { supabase } from "../utils/client";
import { useEffect, useState } from "react";
import { Flex, Box, Text, Button, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import TourneyCard from "../components/TourneyCard";
import { FaPlusSquare } from "react-icons/fa";
import { motion } from "framer-motion";

export default function tournaments() {
  const [tournaments, setTournaments] = useState([]);
  useEffect(() => {
    fetchTourneys();
  }, []);

  async function fetchTourneys() {
    let { data: tournaments, error } = await supabase
      .from("tournaments")
      .select("*");

    console.log(tournaments);
  }
  // chakra
  const bg = useColorModeValue("white.500", "gray.900");
  const color = useColorModeValue("gray.800", "white");

  // framer motion
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <Layout>
      <Flex minH="100vh" bg={bg} color={color}>
        <Flex
          flexDir="column"
          m="auto"
          w="75%"
          alignItems="flex-start"
          justifyContent="flex-start"
        >
          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 1, type: "spring" }}
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
          </motion.div>
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
              <Link href="/create-tournament">
                <a>Add Tournament</a>
              </Link>
            </Button>
          </Box>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <Flex
              flexWrap="wrap"
              justifyContent={["center", "center", "center", "flex-start"]}
            >
              Tourneys coming soon
            </Flex>
          </motion.div>
        </Flex>
      </Flex>
    </Layout>
  );
}
