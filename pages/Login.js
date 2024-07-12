"use client";
import Navbar from "@/components/Navbar";
import { authentic, fire } from "@/utils/Firebase";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Input,
  Link,
  Text,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import React, { useState } from "react";

function Login() {
  const toast = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

  const Login = async (e) => {
    e.preventDefault();
    console.log("Login");
    await signInWithEmailAndPassword(
      authentic,
      email.toLowerCase(),
      password.toLowerCase()
    )
      .then(async (res) => {
        toast({
          title: "Bienvenue",
          description: "Vous serez redirigé sous peu",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        console.log(res.user.email);
        const docRef = doc(fire, `Users/${res.user.email}`);
        const docInfo = await getDoc(docRef);
        if (docInfo.exists()) {
          sessionStorage.setItem("role", docInfo.data().role);
          sessionStorage.setItem("nom", docInfo.data().nom);
          sessionStorage.setItem("email", docInfo.data().email);
        }
      })
      .catch((err) => {
        if (err.message == "Firebase: Error (auth/invalid-credential).") {
          toast({
            title: "Identifiant introuvable",
            description: "Vérifiez votre identifiant et votre mot de passe",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        } else {
          toast({
            title: "Problème detecté",
            description: "Veuillez reessayer ou contacter les administrateurs",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        }

        console.log("erreur", err.message);
      });
  };

  // const updateStudentView = () => {
  //   axios.get("../../api/OtpServices");
  // };

  // updateStudentView();
  return (
    <Box className="h-screen ">
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
                <form onSubmit={Login}>
                  <Input
                    mt={5}
                    required
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    value={email}
                    border={"2px solid black"}
                    type="email"
                    placeholder="Email"
                    _placeholder={{ color: "black", fontWeight: "black" }}
                  />
                  <Input
                    mt={5}
                    required
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    value={password}
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
                <form onSubmit={Login}>
                  <Input
                    mt={5}
                    border={"2px solid black"}
                    type="email"
                    required
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    value={email}
                    placeholder="Email"
                    _placeholder={{ color: "black", fontWeight: "black" }}
                  />
                  <Input
                    mt={5}
                    required
                    border={"2px solid black"}
                    type="password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    value={password}
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
                <form onSubmit={Login}>
                  <Input
                    mt={5}
                    border={"2px solid black"}
                    type="email"
                    required
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    value={email}
                    placeholder="Matricule"
                    _placeholder={{ color: "black", fontWeight: "black" }}
                  />
                  <Input
                    mt={5}
                    required
                    border={"2px solid black"}
                    type="password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    value={password}
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
