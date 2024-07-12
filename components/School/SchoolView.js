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
import React, { useEffect, useState } from "react";
import { Account } from "../Account";
import { WalletOptions } from "../walletoptions";
import { useAccount } from "wagmi";
import SaveStudent from "../saveStudents";
import SaveDiploma from "../saveDiplomas";
import GetStudent from "../getStudents";
import { FaHome } from "react-icons/fa";
import { PiUsersFourDuotone } from "react-icons/pi";
import { FaUserGraduate } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";
import Dashboard from "./Dashboard";
import Apprenants from "./Apprenants";
import BuyPack from "./BuyPack";
import Diplomes from "./Diplomes";
import Profils from "../Profils";

function ConnectWallet() {
  const { isConnected } = useAccount();
  const { isOpen, onOpen, onClose } = useDisclosure();

  if (isConnected) return <Account />;

  return (
    <>
      <Button colorScheme={"green"} onClick={onOpen}>
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
  const [view, setView] = useState("Accueil");
  const [name, setName] = useState("");
  useEffect(() => {
    setName(sessionStorage.getItem("nom"));
  }, [name]);

  return (
    <Flex overflowX={"auto"}>
      <Box
        display={{ base: "none", lg: "block" }}
        className="h-screen "
        bgColor={"#f2eae0"}
        p={20}
      >
        <Center>
          <Avatar />
        </Center>
        <Center>
          <Heading>{name}</Heading>
        </Center>
        <SimpleGrid
          columns={1}
          mt={40}
          fontWeight={500}
          fontSize={"25px"}
          spacing={10}
        >
          <Text
            cursor={"pointer"}
            _hover={{
              bgColor: "#edbd81",
              border: "2px solid black",
              width: "fit-content",
              padding: "10px",
            }}
            onClick={() => setView("Accueil")}
          >
            {" "}
            Accueil
          </Text>
          <Text
            cursor={"pointer"}
            _hover={{
              bgColor: "#edbd81",
              border: "2px solid black",
              width: "fit-content",
              padding: "10px",
            }}
            onClick={() => setView("Apprenants")}
          >
            {" "}
            Nos Apprenants
          </Text>
          <Text
            cursor={"pointer"}
            _hover={{
              bgColor: "#edbd81",
              border: "2px solid black",
              width: "fit-content",
              padding: "10px",
            }}
            onClick={() => setView("Paiement")}
          >
            {" "}
            Paiement
          </Text>
          <Text
            cursor={"pointer"}
            _hover={{
              bgColor: "#edbd81",
              border: "2px solid black",
              width: "fit-content",
              padding: "10px",
            }}
            onClick={() => setView("Diplomes")}
          >
            {" "}
            Nos diplômes{" "}
          </Text>
          <Text
            cursor={"pointer"}
            _hover={{
              bgColor: "#edbd81",
              border: "2px solid black",
              width: "fit-content",
              padding: "10px",
            }}
            onClick={() => setView("Profils")}
          >
            {" "}
            Profils
          </Text>
          {/* <Text> View</Text> */}
        </SimpleGrid>
        <Flex mt={"10vh"}>
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
      <Box
        display={{ base: "block", lg: "none" }}
        className="min-h-screen "
        bgColor={"#f2eae0"}
        py={20}
        px={5}
      >
        <Center>
          <Avatar name={name} />
        </Center>

        <SimpleGrid
          columns={1}
          mt={40}
          fontWeight={500}
          fontSize={"25px"}
          spacing={10}
        >
          <Text onClick={() => setView("Accueil")}>
            {" "}
            <FaHome size={"50px"} />
          </Text>
          <Text onClick={() => setView("Apprenants")}>
            {" "}
            <PiUsersFourDuotone size={"50px"} />
          </Text>
          <Text onClick={() => setView("Diplomes")}>
            {" "}
            <FaUserGraduate size={"50px"} />
          </Text>
          <Text onClick={() => setView("Paiement")}>
            {" "}
            <FaSackDollar size={"50px"} />
          </Text>
          <Text onClick={() => setView("Profils")}>
            {" "}
            <Avatar />
          </Text>
          {/* <Text> View</Text> */}
        </SimpleGrid>
        <Flex mt={"5vh"}>
          <ConnectWallet />
        </Flex>
      </Box>

      {view == "Accueil" ? <Dashboard /> : <></>}
      {view === "Apprenants" && <Apprenants />}
      {view === "Paiement" && <BuyPack />}
      {view === "Diplomes" && <Diplomes />}
      {view === "Profils" && <Profils />}
      {/* {view === "View" && <Text>View</Text>} */}
    </Flex>
  );
}

export default SchoolView;
