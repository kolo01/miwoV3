import React from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  useToast,
} from "@chakra-ui/react";
import SaveStudent from "../saveStudents";
import axios from "axios";

function BuyPack() {
  const toast = useToast();
  const handlePayment = async () => {
    axios
      .post("/api/payment", { amount: 200000 })
      .then((res) => {
        console.log(res.data);
        if (res.data.message == "Forbidden: Invalid or missing API key") {
          toast({
            title: "Erreur",
            description: "Merci de bien vouloir en referer a l'administrateur.",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        } else if (res.data.error == "Min de 10000 FCFA") {
          toast({
            title: "Le montant doit être supérieur ou égal à 10000 FCFA.",
            description: "Veuillez nous joindre pour valider le paiement",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        } else {
          toast({
            title: "Paiement réussi",
            description: "Merci de votre paiement.",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
          window.location.href = "/dashboard";
        }
      })
      .catch((err) =>
        toast({
          title: "Erreur",
          description: "Merci de bien vouloir en referer a l'administrateur.",
          status: "error",
          duration: 5000,
          isClosable: true,
        })
      );
  };
  return (
    <>
      <Box
        className="w-screen h-screen "
        pt={10}
        px={10}
        fontWeight={600}
        fontSize={"25px"}
      >
        <Flex mb={10} justifyContent={"space-between"}>
          <Center>
            <Heading>Paiement des frais </Heading>
          </Center>
          <SaveStudent />
        </Flex>
        <SimpleGrid spacing={10} columns={{ base: 1, lg: 2 }}>
          <Box
            boxShadow="md"
            p={10}
            rounded="lg"
            bgColor="blue"
            color={"white"}
            width={{ base: "full", lg: "full" }}
          >
            <Text textTransform={"uppercase"} mb={5}>
              N° Apprenants
            </Text>
            <Text mb={5}>100</Text>
          </Box>
          <Box
            boxShadow="md"
            p={10}
            rounded="lg"
            bgColor="#0aa699"
            color={"white"}
            width={{ base: "full", lg: "full" }}
          >
            <Text textTransform={"uppercase"} mb={5}>
              Prix par apprenants
            </Text>
            <Text mb={5}>2000 FCFA </Text>
          </Box>
          <Box
            boxShadow="md"
            p={10}
            rounded="lg"
            bgColor="#f35958"
            color={"white"}
            width={{ base: "full", lg: "full" }}
          >
            <Text textTransform={"uppercase"} mb={5}>
              Total due
            </Text>
            <Text mb={5}>200.000</Text>
          </Box>

          <Box
            boxShadow="md"
            p={10}
            rounded="lg"
            bgColor="#735f87"
            color={"white"}
            width={{ base: "full", lg: "full" }}
          >
            <Text textTransform={"uppercase"} mb={5}>
              Total reglé
            </Text>
            <Text mb={5}>100</Text>
          </Box>
        </SimpleGrid>
        <Center>
          <Button onClick={handlePayment} p={10} mt={20} colorScheme={"blue"}>
            Regler son paiement
          </Button>
        </Center>
      </Box>
    </>
  );
}

export default BuyPack;
