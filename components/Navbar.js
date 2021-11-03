import React from "react";
import Link from "next/link";
import { Flex, Box, Text } from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <Flex
      as="nav"
      width="100vw"
      backgroundColor="gray.800"
      borderBottom="2px"
      borderColor="pink.400"
      color="whiteAlpha.800"
      height="5vh"
      top="0"
      justifyContent="space-between"
      position="sticky"
      zIndex="15"
    >
      <Button
        ref={btnRef}
        display={["block", "block", "none", "none"]}
        colorScheme="teal"
        onClick={onOpen}
      >
        Open
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody></DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <Flex m={0} alignItems="center"></Flex>
      <Flex
        as="ul"
        width="30%"
        justifyContent="space-around"
        alignItems="center"
        display={["none", "none", "flex", "flex"]}
      >
        <Link fontSize="2rem" href="/">
          <a>Home</a>
        </Link>
        <Link href="/tournaments">
          <a>Tournaments</a>
        </Link>
        <Link href="/results">
          <a>Results</a>
        </Link>
      </Flex>
    </Flex>
  );
}
