import React from "react";
import Link from "next/link";
import { Flex, Box, Text, IconButton, useColorMode } from "@chakra-ui/react";
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
import { FaMoon, FaSun, FaHamburger, FaGithub, FaPlus } from "react-icons/fa";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Flex
      as="nav"
      backgroundColor="#1f1f1f"
      borderBottom="4px"
      borderColor="pink.400"
      color="whiteAlpha.800"
      height="6vh"
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
        width={["30%", "35%", "40%"]}
        mr={6}
        justifyContent="space-around"
        alignItems="center"
        display={["none", "none", "flex", "flex"]}
        fontSize="2xl"
      >
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/tournaments">
          <a>Tournaments</a>
        </Link>
        <Link href="/results">
          <a>Results</a>
        </Link>
        <IconButton
          icon={colorMode == "light" ? <FaMoon /> : <FaSun />}
          aria-label="Toggle theme"
          onClick={toggleColorMode}
          variant="unstyled"
          fontSize="2xl"
          _hover={{ color: "blue.400" }}
          _focus={{ border: "none", backgroundColor: "transparent" }}
        />
      </Flex>
    </Flex>
  );
}
