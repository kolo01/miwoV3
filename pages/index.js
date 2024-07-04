"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function Home() {
  const [schoolView, setSchoolView] = useState("flex");
  const [enterpriseView, setEnterpriseView] = useState("none");

  return (
    <Box className="w-screen h-screen ">
      <Navbar />
      <Box mt={{ base: 10, lg: 20 }}>
        <Center>
          <Heading px={{ base: 5, lg: 0 }} textAlign={"center"}>
            Decouvrez une nouvelle manière de voir le monde
          </Heading>
        </Center>
        <Center>
          <Text
            mt={5}
            fontSize={{ base: "15px", lg: "20px" }}
            px={{ base: 5, lg: 0 }}
            textAlign={"center"}
          >
            {" "}
            Rejoignez nous et profiter de services vous permettant de gagner en
            temps, en expertise et en fiabilité
          </Text>
        </Center>
        <Center mt={10} display={"flex"}>
          <Button
            mr={20}
            borderRadius={25}
            p={5}
            color={"white"}
            border={"1px solid #bf4408"}
            bgColor={"#bf4408"}
            _hover={{ textDecor: "none", bgColor: "#bf4408" }}
          >
            Nous rejoindre
          </Button>
          <Button
            border={"1px solid #bf4408"}
            borderRadius={25}
            p={5}
            bgColor={"transparent"}
            _hover={{ textDecor: "none", bgColor: "#bf4408", color: "white" }}
          >
            Apprendre plus
          </Button>
        </Center>
      </Box>

      <Box mt={20}>
        <Center>
          <Heading>Nos Services</Heading>
        </Center>
        <Center>
          <Box>
            <SimpleGrid
              columns={2}
              spacing={10}
              px={{ base: 10, lg: 10 }}
              mt={{ base: 10, lg: 10 }}
            >
              <Box>
                <Image
                  src="/DECENTRALISER.png"
                  alt="Service 1"
                  width={200}
                  height={200}
                />
                <Heading mt={5}>Decentralisation</Heading>
                <Text>Description du service 1</Text>
              </Box>
              <Box>
                <Image
                  src="/mutualiser_grand_est.png"
                  alt="Service 2"
                  width={200}
                  height={200}
                />
                <Heading mt={5}>Mutualisation</Heading>
                <Text>Description du service 2</Text>
              </Box>
              <Box>
                <Image
                  src="/VERIFIER.png"
                  alt="Service 3"
                  width={200}
                  height={200}
                />
                <Heading mt={5}>Verification</Heading>
                <Text>Description du service 3</Text>
              </Box>
              <Box>
                <Image
                  src="/COFFRE.jpg"
                  alt="Service 4"
                  width={200}
                  height={200}
                />
                <Heading mt={5}>Coffre de document</Heading>
                <Text>Description du service 3</Text>
              </Box>
            </SimpleGrid>
          </Box>
        </Center>
      </Box>
      <Box my={20}>
        <Center>
          <Heading id="tarifs">Nos abonnements</Heading>
        </Center>
        <Center my={10} display={"flex"}>
          <Button
            mr={20}
            borderRadius={25}
            p={5}
            py={7}
            color={"white"}
            border={"1px solid #bf4408"}
            bgColor={"#bf4408"}
            _hover={{ textDecor: "none", bgColor: "#bf4408" }}
            onClick={() => {
              setEnterpriseView("none"), setSchoolView("flex");
            }}
          >
            Etablissement
          </Button>
          <Button
            border={"1px solid #bf4408"}
            borderRadius={25}
            p={5}
            py={7}
            bgColor={"transparent"}
            _hover={{ textDecor: "none", bgColor: "#bf4408", color: "white" }}
            onClick={() => {
              setEnterpriseView("flex"), setSchoolView("none");
            }}
          >
            Entreprise
          </Button>
        </Center>
        <Center>
          <Box display={schoolView}>
            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10}>
              {/* gratuit */}
              <Box
                height={"50vh"}
                px={10}
                borderRadius={20}
                boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"}
              >
                <Heading my={5}>Basique</Heading>
                <Text>Abonnement etant soumis à des restrictions</Text>
                <Heading>0 XOF</Heading>
                <Box
                  width={"full"}
                  height={"1px"}
                  border={"1px solid grey"}
                  bgColor={"grey"}
                />
                <Text my={5} fontSize={"20px"} fontWeight={500}>
                  {" "}
                  Avantages
                </Text>
                <Flex>
                  <FaCheckCircle color="green" />
                  <Text ml={2}>Enregistrement d{"'"}apprenants</Text>
                </Flex>
              </Box>
              {/* primaire */}
              <Box
                height={"50vh"}
                px={10}
                borderRadius={20}
                boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"}
              >
                <Heading my={5}>Primaire</Heading>
                <Text>Abonnement réservé aux établissements primaires</Text>
                <Heading>2000 XOF</Heading>
                <Box
                  width={"full"}
                  height={"1px"}
                  border={"1px solid grey"}
                  bgColor={"grey"}
                />
                <Text my={5} fontSize={"20px"} fontWeight={500}>
                  {" "}
                  Avantages
                </Text>
                <Flex mt={5}>
                  <FaCheckCircle size={20} color="green" />
                  <Text ml={2}>Enregistrement d{"'"}apprenants</Text>
                </Flex>
                <Flex mt={5}>
                  <FaCheckCircle size={20} color="green" />
                  <Text ml={2}>Enregistrement de bulletins</Text>
                </Flex>
                <Flex mt={5}>
                  <FaCheckCircle size={20} color="green" />
                  <Text ml={2}>Enregistrement de remarque</Text>
                </Flex>
                <Flex mt={5}>
                  <FaCheckCircle size={20} color="green" />
                  <Text ml={2}>
                    Possibilité d{"'"}attribuer des accés aux parents
                  </Text>
                </Flex>
                <Flex mt={5}>
                  <FaCheckCircle size={20} color="green" />
                  <Text ml={2}>
                    Possibilité de consulter les enregistrements
                  </Text>
                </Flex>
              </Box>
              {/* college/lycee */}
              <Box
                height={"50vh"}
                px={10}
                borderRadius={20}
                boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"}
              >
                <Heading my={5}>College/Lycee</Heading>
                <Text>
                  Abonnement réservé aux établissements du college/lycee
                </Text>
                <Heading>3000 XOF</Heading>
                <Box
                  width={"full"}
                  height={"1px"}
                  border={"1px solid grey"}
                  bgColor={"grey"}
                />
                <Text my={5} fontSize={"20px"} fontWeight={500}>
                  {" "}
                  Avantages
                </Text>
                <Flex mt={5}>
                  <FaCheckCircle size={20} color="green" />
                  <Text ml={2}>Enregistrement d{"'"}apprenants</Text>
                </Flex>
                <Flex mt={5}>
                  <FaCheckCircle size={20} color="green" />
                  <Text ml={2}>Enregistrement de bulletins</Text>
                </Flex>
                <Flex mt={5}>
                  <FaCheckCircle size={20} color="green" />
                  <Text ml={2}>Enregistrement de diplôme</Text>
                </Flex>
                <Flex mt={5}>
                  <FaCheckCircle size={20} color="green" />
                  <Text ml={2}>Enregistrement de remarque</Text>
                </Flex>
                <Flex mt={5}>
                  <FaCheckCircle size={20} color="green" />
                  <Text ml={2}>
                    Possibilité d{"'"}attribuer des accés aux parents
                  </Text>
                </Flex>
                <Flex mt={5}>
                  <FaCheckCircle size={20} color="green" />
                  <Text ml={2}>
                    Possibilité de consulter les enregistrements
                  </Text>
                </Flex>
              </Box>

              {/* University */}
              <Box
                height={"50vh"}
                px={10}
                borderRadius={20}
                boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"}
              >
                <Heading my={5}>Université</Heading>
                <Text>Abonnement réservé aux Universités</Text>
                <Heading>5000 XOF</Heading>
                <Box
                  width={"full"}
                  height={"1px"}
                  border={"1px solid grey"}
                  bgColor={"grey"}
                />
                <Text my={5} fontSize={"20px"} fontWeight={500}>
                  {" "}
                  Avantages
                </Text>
                <Flex mt={5}>
                  <FaCheckCircle size={20} color="green" />
                  <Text ml={2}>Enregistrement d{"'"}apprenants</Text>
                </Flex>
                <Flex mt={5}>
                  <FaCheckCircle size={20} color="green" />
                  <Text ml={2}>Enregistrement de bulletins</Text>
                </Flex>
                <Flex mt={5}>
                  <FaCheckCircle size={20} color="green" />
                  <Text ml={2}>Enregistrement de remarque</Text>
                </Flex>
                <Flex mt={5}>
                  <FaCheckCircle size={20} color="green" />
                  <Text ml={2}>
                    Possibilité d{"'"}attribuer des accés aux parents
                  </Text>
                </Flex>
                <Flex mt={5}>
                  <FaCheckCircle size={20} color="green" />
                  <Text ml={2}>
                    Possibilité de consulter les enregistrements
                  </Text>
                </Flex>
              </Box>
            </SimpleGrid>
          </Box>
        </Center>

        <Center>
          <Box display={enterpriseView}>
            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10}>
              {/* Basique */}
              <Box
                height={"50vh"}
                px={10}
                borderRadius={20}
                boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"}
              >
                <Heading my={5}>Basique</Heading>
                <Text>
                  Abonnement réservé aux entreprises desirant avoir un avant
                  gout de nos services
                </Text>
                <Heading>3000 XOF / Mois</Heading>
                <Box
                  width={"full"}
                  height={"1px"}
                  border={"1px solid grey"}
                  bgColor={"grey"}
                />
                <Text my={5} fontSize={"20px"} fontWeight={500}>
                  {" "}
                  Avantages
                </Text>
                <Flex mt={5}>
                  <FaCheckCircle size={20} color="green" />
                  <Text ml={2}>Enregistrement d{"'"}apprenants</Text>
                </Flex>
                <Flex mt={5}>
                  <FaCheckCircle size={20} color="green" />
                  <Text ml={2}>Enregistrement de bulletins</Text>
                </Flex>
                <Flex mt={5}>
                  <FaCheckCircle size={20} color="green" />
                  <Text ml={2}>Enregistrement de remarque</Text>
                </Flex>
                <Flex mt={5}>
                  <FaCheckCircle size={20} color="green" />
                  <Text ml={2}>
                    Possibilité d{"'"}attribuer des accés aux parents
                  </Text>
                </Flex>
                <Flex mt={5}>
                  <FaCheckCircle size={20} color="green" />
                  <Text ml={2}>
                    Possibilité de consulter les enregistrements
                  </Text>
                </Flex>
              </Box>

              {/* Moyen */}
              <Box
                height={"50vh"}
                px={10}
                borderRadius={20}
                boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"}
              >
                <Heading my={5}>Moyen</Heading>
                <Text>Abonnement etant soumis à des restrictions</Text>
                <Heading>5000 XOF / 3 MOIS</Heading>
                <Box
                  width={"full"}
                  height={"1px"}
                  border={"1px solid grey"}
                  bgColor={"grey"}
                />
                <Text my={5} fontSize={"20px"} fontWeight={500}>
                  {" "}
                  Avantages
                </Text>
                <Flex>
                  <FaCheckCircle color="green" />
                  <Text ml={2}>Enregistrement d{"'"}apprenants</Text>
                </Flex>
              </Box>

              {/* University */}
              <Box
                height={"50vh"}
                px={10}
                borderRadius={20}
                boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"}
              >
                <Heading my={5}>Intermediaire</Heading>
                <Text>Abonnement réservé aux entreprises desirant </Text>
                <Heading>15000 XOF / 1 AN</Heading>
                <Box
                  width={"full"}
                  height={"1px"}
                  border={"1px solid grey"}
                  bgColor={"grey"}
                />
                <Text my={5} fontSize={"20px"} fontWeight={500}>
                  {" "}
                  Avantages
                </Text>
                <Flex mt={5}>
                  <FaCheckCircle size={20} color="green" />
                  <Text ml={2}>Enregistrement d{"'"}apprenants</Text>
                </Flex>
                <Flex mt={5}>
                  <FaCheckCircle size={20} color="green" />
                  <Text ml={2}>Enregistrement de bulletins</Text>
                </Flex>
                <Flex mt={5}>
                  <FaCheckCircle size={20} color="green" />
                  <Text ml={2}>Enregistrement de remarque</Text>
                </Flex>
                <Flex mt={5}>
                  <FaCheckCircle size={20} color="green" />
                  <Text ml={2}>
                    Possibilité d{"'"}attribuer des accés aux parents
                  </Text>
                </Flex>
                <Flex mt={5}>
                  <FaCheckCircle size={20} color="green" />
                  <Text ml={2}>
                    Possibilité de consulter les enregistrements
                  </Text>
                </Flex>
              </Box>
            </SimpleGrid>
          </Box>
        </Center>
      </Box>
      <Footer />
    </Box>
  );
}
