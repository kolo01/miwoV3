"use client";
import {
  Box,
  Button,
  Flex,
  Image,
  Link,
  SimpleGrid,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { CiMenuBurger } from "react-icons/ci";

import React from "react";

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex
        display={{ base: "none", lg: "flex" }}
        px={20}
        pt={5}
        justifyContent={"space-between"}
        fontWeight={600}
        fontSize={"20px"}
      >
        <Flex justifyContent={"space-between"}>
          <Box mr={20}>
            <Image
              src="./gg.png"
              alt="logo"
              mt={-5}
              width={"70px"}
              height={"70px"}
            />
          </Box>
          <SimpleGrid spacing={20} columns={5}>
            <Link fontWeight={600} fontSize={"20px"} href="/">
              Accueil
            </Link>
            <Link fontWeight={600} fontSize={"20px"} href="/About">
              A Propos
            </Link>
            <Link fontWeight={600} fontSize={"20px"} href="/#tarifs">
              Tarifs
            </Link>
            <Link fontWeight={600} fontSize={"20px"} href="/About">
              Projet
            </Link>
            <Link fontWeight={600} fontSize={"20px"} href="/Contact">
              Contact
            </Link>
          </SimpleGrid>
        </Flex>
        <SimpleGrid columns={2} spacing={20}>
          <Button
            border={"1px solid orange"}
            bgColor={"transparent"}
            borderRadius={25}
            textDecor={"none"}
            _hover={{ bgColor: "black", color: "white", textDecor: "none" }}
            as={Link}
            href="/Login"
          >
            Connexion
          </Button>
          <Button
            border={"1px solid orange"}
            bgColor={"#bf4408"}
            borderRadius={25}
            textDecor={"none"}
            color="white"
            _hover={{ bgColor: "black", color: "white", textDecor: "none" }}
            as={Link}
            href="/Inscription"
          >
            Inscription
          </Button>
        </SimpleGrid>
      </Flex>
      <Flex
        display={{ base: "flex", lg: "none" }}
        px={20}
        pt={10}
        justifyContent={"space-between"}
      >
        <Box as={Link} href="/" mr={20}>
          <Image src="./gg.png" alt="logo" width={"70px"} height={"70px"} />
        </Box>

        <Button border={"1px solid black"} onClick={onOpen}>
          <CiMenuBurger />
        </Button>
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>

            <DrawerBody>
              <Flex justifyContent={"space-between"}>
                <SimpleGrid spacing={20}>
                  <Link fontWeight={600} fontSize={"20px"} href="/">
                    Accueil
                  </Link>
                  <Link fontWeight={600} fontSize={"20px"} href="/About">
                    A Propos
                  </Link>
                  <Link fontWeight={600} fontSize={"20px"} href="/#tarifs">
                    Tarifs
                  </Link>
                  <Link fontWeight={600} fontSize={"20px"} href="/About">
                    Projet
                  </Link>
                  <Link fontWeight={600} fontSize={"20px"} href="/Contact">
                    Contact
                  </Link>
                </SimpleGrid>
              </Flex>
              <SimpleGrid spacing={5} mt={10}>
                <Button
                  border={"1px solid orange"}
                  bgColor={"transparent"}
                  borderRadius={25}
                  textDecor={"none"}
                  _hover={{
                    bgColor: "black",
                    color: "white",
                    textDecor: "none",
                  }}
                  as={Link}
                  href="/Login"
                >
                  Connexion
                </Button>
                <Button
                  border={"1px solid orange"}
                  bgColor={"#bf4408"}
                  borderRadius={25}
                  textDecor={"none"}
                  color="white"
                  _hover={{
                    bgColor: "black",
                    color: "white",
                    textDecor: "none",
                  }}
                  as={Link}
                  href="/Inscription"
                >
                  Inscription
                </Button>
              </SimpleGrid>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </>
  );
}

export default Navbar;
