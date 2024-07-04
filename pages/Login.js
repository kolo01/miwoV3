"use client";
import Navbar from "@/components/Navbar";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";

function Login() {
  const [selected, setSelected] = useState("Enterprise");
  const [colorSelected, setColorSelected] = useState([
    "white",
    "#bf4408",
    "white",
  ]);
  const [TextcolorSelected, setTextColorSelected] = useState([
    "black",
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
    <Box bgImage={"./school.jpg"} className="h-screen ">
      <Navbar />
      <Box mt={"20vh"}>
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
                updateSelected({ inde: 0, selected: "Student" });
              }}
            >
              Elève
            </Text>
            <Text
              border={"2px solid black"}
              as={Box}
              px={20}
              bgColor={colorSelected[1] ? colorSelected[1] : "white"}
              color={TextcolorSelected[1] ? TextcolorSelected[1] : "black"}
              onClick={() => {
                updateSelected({ inde: 1, selected: "Enterprise" });
              }}
            >
              Entreprise
            </Text>
            <Text
              border={"2px solid black"}
              borderRightRadius={10}
              as={Box}
              px={20}
              bgColor={colorSelected[2] ? colorSelected[2] : "white"}
              color={TextcolorSelected[2] ? TextcolorSelected[2] : "black"}
              onClick={() => {
                updateSelected({ inde: 2, selected: "School" });
              }}
            >
              Etablissement
            </Text>
          </Flex>
        </Center>
        {selected && selected == "Enterprise" ? (
          <>
            <Center>
              <Box
                boxShadow={" rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"}
                p={10}
                mt={10}
              >
                <Center>
                  <Heading>Connexion</Heading>
                </Center>
                <form>
                  <Input
                    mt={5}
                    border={"2px solid black"}
                    type="email"
                    placeholder="Email"
                    _placeholder={{ color: "black", fontWeight: "black" }}
                  />
                  <Input
                    mt={5}
                    border={"2px solid black"}
                    type="password"
                    placeholder="Mot de passe"
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
                      Connexion
                    </Button>
                  </Center>
                </form>
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
                  <Heading>Connexion</Heading>
                </Center>
                <form>
                  <Input
                    mt={5}
                    border={"2px solid black"}
                    type="email"
                    placeholder="Email"
                    _placeholder={{ color: "black", fontWeight: "black" }}
                  />
                  <Input
                    mt={5}
                    border={"2px solid black"}
                    type="password"
                    placeholder="Mot de passe"
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
                      Connexion
                    </Button>
                  </Center>
                </form>
              </Box>
            </Center>
          </>
        ) : selected && selected == "Student" ? (
          <>
            <Center>
              <Box
                boxShadow={" rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"}
                p={10}
                mt={10}
              >
                <Center>
                  <Heading>Connexion</Heading>
                </Center>
                <form>
                  <Input
                    mt={5}
                    border={"2px solid black"}
                    type="email"
                    placeholder="Matricule"
                    _placeholder={{ color: "black", fontWeight: "black" }}
                  />
                  <Input
                    mt={5}
                    border={"2px solid black"}
                    type="password"
                    placeholder="Mot de passe"
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
                      Connexion
                    </Button>
                  </Center>
                </form>
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

export default Login;
