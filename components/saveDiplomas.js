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
} from "@chakra-ui/react";

import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useWriteContract } from "wagmi";
import { abi } from "../utils/ABI";

export default function SaveDiploma() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { writeContract } = useWriteContract();
  const [matricule, setMatricule] = useState("");
  const [diplome, setDiplome] = useState("");
  const [years, setYears] = useState("");
  const adressSmarted = "0x033a1c372D75d6B1Fe0dE89eAfe81630e4aF0E4c";
  const toast = useToast();

  const handleSave = async () => {
    const hash = await writeContract({
      address: adressSmarted,
      abi: abi,
      functionName: "registerDiploma",
      args: [matricule, diplome, years],
    });
  };

  return (
    <>
      <Button
        onClick={onOpen}
        bgColor={"aquamarine"}
        _hover={{ bgColor: "cyan.400", color: "white" }}
      >
        Enregistrer un Diplôme
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Enregistrement d{"'"}un Diplôme</ModalHeader>
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
                <Text>Diplôme obtenues</Text>
                <Input
                  type="text"
                  onChange={(e) => setDiplome(e.target.value)}
                />
              </Box>
              <Box>
                <Text>Année académique</Text>
                <Input type="text" onChange={(e) => setYears(e.target.value)} />
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
