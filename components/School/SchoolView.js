import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Account } from "../Account";
import { WalletOptions } from "../walletoptions";
import { useAccount } from "wagmi";
import SaveStudent from "../saveStudents";
import SaveDiploma from "../saveDiplomas";
import GetStudent from "../getStudents";

function ConnectWallet() {
  const { isConnected } = useAccount();
  const { isOpen, onOpen, onClose } = useDisclosure();
  if (isConnected) return <Account />;

  return (
    <>
      <Button colorScheme={"green"} p={10} onClick={onOpen}>
        Connexion
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Nos Portefeuilles</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <SimpleGrid columns={2} spacingX={20} spacingY={10}>
              <WalletOptions />
            </SimpleGrid>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

function SchoolView() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex>
      <Box className="h-screen " bgColor={"#f2eae0"} p={20}>
        <Center>
          <Avatar />
        </Center>
        <Center>
          <Heading>Nom du groupe</Heading>
        </Center>
        <SimpleGrid
          columns={1}
          mt={40}
          fontWeight={500}
          fontSize={"25px"}
          spacing={10}
        >
          <Text> Accueil</Text>
          <Text> Mes Diplomes</Text>
          <Text> Mon Parcours </Text>
          <Text> Profils</Text>
          {/* <Text> View</Text> */}
        </SimpleGrid>
        <Flex mt={"20vh"}>
          <ConnectWallet />
          {/* <Button onClick={onOpen}>Open Modal</Button>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Modal Title</ModalHeader>
              <ModalCloseButton />
              <ModalBody></ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
                <Button variant="ghost">Secondary Action</Button>
              </ModalFooter>
            </ModalContent>
          </Modal> */}
        </Flex>
      </Box>
      <Box className="h-screen " bgColor={"white"}>
        <SimpleGrid columns={3} spacing={10} mt={20}>
          <Box
            textAlign={"center"}
            height={"fit-content"}
            p={10}
            width={"fit-content"}
            boxShadow={" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"}
          >
            <Text fontSize={"25px"} fontWeight={600}>
              Nombre d{"'"}apprenants
            </Text>
            <Text>150</Text>
          </Box>
          <Box
            textAlign={"center"}
            height={"fit-content"}
            p={10}
            width={"fit-content"}
            boxShadow={" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"}
          >
            <Text fontSize={"25px"} fontWeight={600}>
              Diplômes enregistrés
            </Text>
            <Text>100</Text>
          </Box>
          <Box
            textAlign={"center"}
            height={"fit-content"}
            p={10}
            width={"fit-content"}
            boxShadow={" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"}
          >
            <Text fontSize={"25px"} fontWeight={600}>
              Apprenants Enregistrés
            </Text>
            <Text>100</Text>
          </Box>
          <Box
            textAlign={"center"}
            height={"fit-content"}
            p={10}
            width={"fit-content"}
            boxShadow={" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"}
          >
            <Text fontSize={"25px"} fontWeight={600}>
              Nombres d{"'"}enregistrement possible
            </Text>
            <Text>100</Text>
          </Box>
          <Box
            textAlign={"center"}
            height={"fit-content"}
            p={10}
            width={"fit-content"}
            boxShadow={" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"}
          >
            <Text fontSize={"25px"} fontWeight={600}>
              Nombres d{"'"}enregistrement restant
            </Text>
            <Text>50</Text>
          </Box>
        </SimpleGrid>
        <Flex mt={10} justifyContent={"space-evenly"}>
          <SaveStudent />
          <SaveDiploma />
        </Flex>
        <Center>
          <Heading>Rechercher un etudiant</Heading>
        </Center>
        <GetStudent />
      </Box>
    </Flex>
  );
}

export default SchoolView;
