import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Heading,
  Center,
} from "@chakra-ui/react";
import { CiWarning } from "react-icons/ci";

function Warning() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [disabled, setDisabled] = useState(false);
  useEffect(() => {
    setDisabled(sessionStorage.getItem("modal"));
    if (disabled) {
    } else {
      onOpen();
    }
  }, [disabled, onOpen]);
  const handleClick = () => {
    sessionStorage.setItem("modal", true);
    setDisabled(true);
    onClose();
  };
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton onClick={handleClick} />
          <ModalBody>
            <Center>
              <CiWarning color="red" size={"50px"} />
            </Center>
            <Heading>
              LE PAIEMENT EST INTEGRE QUE POUR LES COMPTES ETABLISSEMNTS
            </Heading>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Warning;
