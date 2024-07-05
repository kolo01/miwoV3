import { Search2Icon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Icon,
  Box,
  Heading,
  Flex,
  Text,
  Input,
} from "@chakra-ui/react";

import axios from "axios";
import { useEffect, useState } from "react";
import { abi } from "../utils/ABI";
import { useReadContract } from "wagmi";

export default function GetStudent() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const adressSmarted = "0x033a1c372D75d6B1Fe0dE89eAfe81630e4aF0E4c";

  const [resultats, setResultats] = useState([]);
  const [nom, setNom] = useState("");
  const [id, setId] = useState("");

  const Search = async (id) => {
    const hash = await useReadContract({
      address: adressSmarted,
      abi: abi,
      functionName: "students",
      args: [id],
    }).then((response) => {
      setResultats(response), setNom(response[0]);
    });
    console.log(hash);
  };

  return (
    <>
      <Flex>
        <Input
          type="text"
          placeholder="MAtricule de l'apprenant"
          width={"50%"}
          border={"2px solid black"}
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <Button
          onClick={() => {
            onOpen(), Search(id);
          }}
          as={Search2Icon}
          width={"60px"}
          fontSize={"100px"}
        />
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Resultats de la recherche</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {nom.length > 2 ? (
              <Box>
                <Flex>
                  <Text fontWeight={700} mr={2}>
                    Nom:{" "}
                  </Text>
                  <Text>{resultats[0]}</Text>
                </Flex>
                <Flex>
                  <Text fontWeight={700} mr={2}>
                    Prenom:{" "}
                  </Text>
                  <Text>{resultats[1]}</Text>
                </Flex>
                <Flex>
                  <Text fontWeight={700} mr={2}>
                    Sexe:{" "}
                  </Text>
                  <Text>{resultats[2]}</Text>
                </Flex>
                <Flex>
                  <Text fontWeight={700} mr={2}>
                    Date de naissance:{" "}
                  </Text>
                  <Text>{resultats[3]}</Text>
                </Flex>
              </Box>
            ) : (
              <Heading fontSize={"25px"} textAlign={"center"}>
                Apprenant introuvable
              </Heading>
            )}
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              Fermer
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
