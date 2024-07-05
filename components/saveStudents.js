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
  SimpleGrid,
  Box,
  Text,
  Input,
  useToast,
  Select,
} from "@chakra-ui/react";

import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { abi } from "../utils/ABI";
import { useWriteContract } from "wagmi";

export default function SaveStudent() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [matricule, setMatricule] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [sex, setSex] = useState("");
  const [birth, setBirth] = useState("");
  const { writeContract } = useWriteContract();
  const adressSmarted = "0x033a1c372D75d6B1Fe0dE89eAfe81630e4aF0E4c";
  const toast = useToast();

  const handleSave = async () => {
    const hash = await writeContract({
      address: adressSmarted,
      abi: abi,
      functionName: "registerStudent",
      args: [matricule, nom, prenom, sex, birth],
    });
  };

  return (
    <>
      <Button
        onClick={onOpen}
        bgColor={"aquamarine"}
        _hover={{ bgColor: "cyan.400", color: "white" }}
      >
        Enregistrer un apprenant
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Enregistrement d{"'"}un Apprenant</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <SimpleGrid columns={[1, 1, 1, 2, 2]}>
              <Box>
                <Text>Matricule de l{"'"}apprenant</Text>
                <Input
                  type="text"
                  onChange={(e) => setMatricule(e.target.value)}
                />
              </Box>
              <Box>
                <Text>Nom</Text>
                <Input type="text" onChange={(e) => setNom(e.target.value)} />
              </Box>
              <Box>
                <Text>Prenom</Text>
                <Input
                  type="text"
                  onChange={(e) => setPrenom(e.target.value)}
                />
              </Box>
              <Box>
                <Text>Sexe</Text>
                <Select onChange={(e) => setSex(e.target.value)}>
                  <option value={"M"}>M</option>
                  <option value={"F"}>F</option>
                </Select>
              </Box>
              <Box>
                <Text>Date de naissance</Text>
                <Input type="date" onChange={(e) => setBirth(e.target.value)} />
              </Box>
            </SimpleGrid>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={() => handleSave()}>
              Enregistrer
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Annuler
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
