import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Flex, Box, Text, Button } from "@chakra-ui/react";
import Layout from "../components/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <Flex
        minH="100vh"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        backgroundImage="url('images/bg.png')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        zIndex="12"
        position="absolute"
        top="0"
        width="100%"
      >
        <Box
          className={styles.gradient}
          position="absolute"
          top="0"
          left="0"
          width="100vw"
          height="100vh"
        ></Box>
        <Text
          as="h1"
          fontSize={["6xl", "6xl", "8xl", "8xl"]}
          color="whiteAlpha.900"
          zIndex="15"
        >
          {" "}
          Welcome To Melty.Tourneys
        </Text>
        <Text as="h2" fontSize="4xl" color="whiteAlpha.900" zIndex="15">
          Join in on a tournament or check some results GLHF
        </Text>
        <Flex mt={6} justifyContent="space-around">
          <Link href="/tournaments">
            <Button fontSize="xl" p={6} m={2} backgroundColor="pink.500">
              <a>Join a Tournament</a>
            </Button>
          </Link>
          <Link href="/results">
            <Button fontSize="xl" p={6} m={2} backgroundColor="pink.500">
              <a>Results</a>
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Layout>
  );
}
