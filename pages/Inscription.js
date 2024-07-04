"use client";
import Navbar from "@/components/Navbar";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";

function Inscription() {
  const [selected, setSelected] = useState("Enterprise");
  const [colorSelected, setColorSelected] = useState(["#bf4408", "white"]);
  const [TextcolorSelected, setTextColorSelected] = useState([
    "white",
    "black",
  ]);

  const updateSelected = ({ inde, selected }) => {
    setSelected(selected);
    colorSelected.map((color, index) => {
      if (inde === index) {
        colorSelected[index] = "#bf4408";
      } else {
        colorSelected[index] = "white";
      }
    });
    TextcolorSelected.map((color, index) => {
      if (inde === index) {
        TextcolorSelected[index] = "white";
      } else {
        TextcolorSelected[index] = "black";
      }
    });
  };

  // const updateStudentView = () => {
  //   axios.get("../../api/OtpServices");
  // };

  // updateStudentView();
  return (
    <Box
      bgImage={"./enterprise.jpg"}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      className="w-screen h-screen"
    >
      <Navbar />
      <Box mt={"2vh"}>
        <Center>
          <Flex borderRadius={10} px={5} fontSize={20} fontWeight={500}>
            <Text
              border={"2px solid black"}
              borderLeftRadius={10}
              as={Box}
              px={20}
              bgColor={colorSelected[0] ? colorSelected[0] : "white"}
              color={TextcolorSelected[0] ? TextcolorSelected[0] : "black"}
              onClick={() => {
                updateSelected({ inde: 0, selected: "Enterprise" });
              }}
            >
              Entreprise
            </Text>
            <Text
              border={"2px solid black"}
              borderRightRadius={10}
              as={Box}
              px={20}
              bgColor={colorSelected[1] ? colorSelected[1] : "white"}
              color={TextcolorSelected[1] ? TextcolorSelected[1] : "black"}
              onClick={() => {
                updateSelected({ inde: 1, selected: "School" });
              }}
            >
              Etablissement
            </Text>
          </Flex>
        </Center>
        {selected && selected == "Enterprise" ? (
          <>
            <Center>
              <Box boxShadow={" rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"} p={10}>
                <Center>
                  <Heading>Inscription</Heading>
                </Center>
                <Box as="form" display={"grid"}>
                  <Input
                    width={"300px"}
                    mt={5}
                    border={"2px solid black"}
                    type="text"
                    placeholder="Nom de l'entreprise"
                    _placeholder={{ color: "black", fontWeight: "black" }}
                  />
                  <Input
                    width={"300px"}
                    mt={5}
                    border={"2px solid black"}
                    type="Text"
                    placeholder="Siege de l'entreprise"
                    _placeholder={{ color: "black", fontWeight: "black" }}
                  />
                  <Input
                    width={"300px"}
                    mt={5}
                    border={"2px solid black"}
                    type="number"
                    placeholder="Numéro"
                    _placeholder={{ color: "black", fontWeight: "black" }}
                  />
                  <Input
                    width={"300px"}
                    mt={5}
                    border={"2px solid black"}
                    type="email"
                    placeholder="Email"
                    _placeholder={{ color: "black", fontWeight: "black" }}
                  />
                  <Input
                    width={"300px"}
                    mt={5}
                    border={"2px solid black"}
                    type="password"
                    placeholder="Mot de passe"
                    _placeholder={{ color: "black", fontWeight: "black" }}
                  />
                  <Input
                    width={"300px"}
                    mt={5}
                    border={"2px solid black"}
                    type="password"
                    placeholder="Confirmer votre Mot de passe"
                    _placeholder={{ color: "black", fontWeight: "black" }}
                  />
                  <Center>
                    <Button
                      mt={5}
                      px={10}
                      type="submit"
                      color={"white"}
                      bgColor={"#bf4408"}
                      _hover={{
                        bgColor: "#bf4408",
                        color: "white",
                        textDecor: "none",
                      }}
                    >
                      Inscription
                    </Button>
                  </Center>
                </Box>
              </Box>
            </Center>
          </>
        ) : selected && selected == "School" ? (
          <>
            <Center>
              <Box
                boxShadow={" rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"}
                p={10}
                mt={10}
              >
                <Center>
                  <Heading>Inscription</Heading>
                </Center>
                <Box as="form" display={"grid"}>
                  <Input
                    width={"300px"}
                    mt={5}
                    border={"2px solid black"}
                    type="text"
                    placeholder="Nom de l'établissement"
                    _placeholder={{ color: "black", fontWeight: "black" }}
                  />
                  <Input
                    width={"300px"}
                    mt={5}
                    border={"2px solid black"}
                    type="Text"
                    placeholder="Commune d'appartenance"
                    _placeholder={{ color: "black", fontWeight: "black" }}
                  />
                  <Input
                    width={"300px"}
                    mt={5}
                    border={"2px solid black"}
                    type="number"
                    placeholder="Numéro"
                    _placeholder={{ color: "black", fontWeight: "black" }}
                  />
                  <Select
                    width={"300px"}
                    mt={5}
                    border={"2px solid black"}
                    color="black"
                    fontWeight="black"
                  >
                    <option value="">Choisir une catégorie</option>
                    <option value="primaire">Primaire</option>
                    <option value="secondaire">Secondaire</option>
                    <option value="supérieur">Supérieur</option>
                  </Select>

                  <Input
                    width={"300px"}
                    mt={5}
                    border={"2px solid black"}
                    type="email"
                    placeholder="Email"
                    _placeholder={{ color: "black", fontWeight: "black" }}
                  />
                  <Input
                    width={"300px"}
                    mt={5}
                    border={"2px solid black"}
                    type="password"
                    placeholder="Mot de passe"
                    _placeholder={{ color: "black", fontWeight: "black" }}
                  />
                  <Input
                    width={"300px"}
                    mt={5}
                    border={"2px solid black"}
                    type="password"
                    placeholder="Confirmer votre Mot de passe"
                    _placeholder={{ color: "black", fontWeight: "black" }}
                  />
                  <Center>
                    <Button
                      mt={5}
                      px={10}
                      type="submit"
                      color={"white"}
                      bgColor={"#bf4408"}
                      _hover={{
                        bgColor: "#bf4408",
                        color: "white",
                        textDecor: "none",
                      }}
                    >
                      Inscription
                    </Button>
                  </Center>
                </Box>
              </Box>
            </Center>
          </>
        ) : (
          <></>
        )}
      </Box>
    </Box>
  );
}

export default Inscription;
