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
  Select,
  Text,
  Link,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signOut,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";

function Inscription() {
  const toast = useToast();

  //Variable des differents input
  const [nom, setNom] = useState("");
  const [siege, setSiege] = useState("");
  const [dfe, setDfe] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  //Fin declaration des variables

  ///Variables Etablissement
  const [commune, setCommune] = useState("");
  const [phone, setPhone] = useState("");
  const [categorie, setCategorie] = useState("");

  const [selected, setSelected] = useState("Enterprise");
  const [colorSelected, setColorSelected] = useState(["#bf4408", "white"]);
  const [TextcolorSelected, setTextColorSelected] = useState([
    "white",
    "black",
  ]);

  const SignUp = async (e) => {
    e.preventDefault();
    try {
      if (password == confirmPassword) {
        console.log("password okay");
        if (selected == "Enterprise") {
          console.log("inscription");
          const newUser = {
            nom,
            siege,
            dfe,
            email,
            password,
            role: selected,

            phone,
          };
          const _user = doc(fire, `Users/${email}`);

          await setDoc(_user, newUser);

          await createUserWithEmailAndPassword(authentic, email, password)
            .then(async (userCredential) => {
              console.log("User created successfully: ", userCredential.user);
              await sendEmailVerification(userCredential.user);
              signOut();
              toast({
                title: "Inscription réussie",
                description:
                  "Votre compte a été créé avec succès. Vérifiez votre email pour activer votre compte.",
                status: "success",
                duration: 5000,
                isClosable: true,
              });
            })
            .catch((error) => {
              console.log(error);
            });
        } else if (selected == "School") {
          console.log(categorie);
          const newUser = {
            nom,
            commune,
            phone,
            email,
            categorie,
            password,
            role: selected,
          };
          const _user = doc(fire, `Users/${email}`);

          await setDoc(_user, newUser);

          await createUserWithEmailAndPassword(authentic, email, password)
            .then(async (userCredential) => {
              console.log("User created successfully: ", userCredential.user);
              await sendEmailVerification(userCredential.user);
              signOut();
              toast({
                title: "Inscription réussie",
                description:
                  "Votre compte a été créé avec succès. Vérifiez votre email pour activer votre compte.",
                status: "success",
                duration: 5000,
                isClosable: true,
              });
            })
            .catch((error) => {
              console.log(error);
            });
        }
      }
      alert(
        "Veuillez verifier vos mails afin de confirmer votre inscription..."
      );
    } catch (error) {
      toast({
        title: "Erreur detecté",
        description: "Email déjà utilisé/ Information erronée",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const updateSelected = ({ inde, selected }) => {
    console.log(selected);
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
      bgImage={{ base: "study.jpg", lg: "./enterprise.jpg" }}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      className="w-screen min-h-screen"
    >
      <Navbar />
      <Box mt={"7vh"}>
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
              <Box
                mt={{ base: "5vh", lg: "2vh" }}
                color={{ base: "white", lg: "black" }}
                boxShadow={{
                  base: " rgba(0, 0, 0, 1) 10px 10px 10px 10px;",
                  lg: " rgba(0, 0, 0, 0.2) 10px 10px 10px 10px;",
                }}
                p={10}
              >
                <Center>
                  <Heading>Inscription</Heading>
                </Center>
                <Box as="form" display={"grid"} onSubmit={SignUp}>
                  <Input
                    width={"300px"}
                    mt={5}
                    border={"2px solid black"}
                    type="text"
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                    placeholder="Nom de l'entreprise"
                    _placeholder={{ color: "black", fontWeight: "black" }}
                  />
                  <Input
                    width={"300px"}
                    mt={5}
                    border={"2px solid black"}
                    type="Text"
                    value={siege}
                    onChange={(e) => setSiege(e.target.value)}
                    placeholder="Siege de l'entreprise"
                    _placeholder={{ color: "black", fontWeight: "black" }}
                  />
                  <Input
                    width={"300px"}
                    mt={5}
                    border={"2px solid black"}
                    type="Text"
                    value={dfe}
                    onChange={(e) => setDfe(e.target.value)}
                    placeholder="Numéro DFE"
                    _placeholder={{ color: "black", fontWeight: "black" }}
                  />
                  <Input
                    width={"300px"}
                    mt={5}
                    border={"2px solid black"}
                    type="number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Numéro"
                    _placeholder={{ color: "black", fontWeight: "black" }}
                  />
                  <Input
                    width={"300px"}
                    mt={5}
                    border={"2px solid black"}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    _placeholder={{ color: "black", fontWeight: "black" }}
                  />
                  <Input
                    width={"300px"}
                    mt={5}
                    border={"2px solid black"}
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Mot de passe"
                    _placeholder={{ color: "black", fontWeight: "black" }}
                  />
                  <Input
                    width={"300px"}
                    mt={5}
                    border={"2px solid black"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
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
                <Box as="form" display={"grid"} onSubmit={SignUp}>
                  <Input
                    width={"300px"}
                    mt={5}
                    border={"2px solid black"}
                    type="text"
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                    placeholder="Nom de l'établissement"
                    _placeholder={{ color: "black", fontWeight: "black" }}
                  />
                  <Input
                    width={"300px"}
                    mt={5}
                    value={commune}
                    onChange={(e) => setCommune(e.target.value)}
                    border={"2px solid black"}
                    type="Text"
                    placeholder="Commune d'appartenance"
                    _placeholder={{ color: "black", fontWeight: "black" }}
                  />
                  <Input
                    width={"300px"}
                    mt={5}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
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
                    onChange={(e) => setCategorie(e.target.value)}
                  >
                    {/* <option value="">Choisir une catégorie</option> */}
                    <option value="primaire">Primaire</option>
                    <option value="secondaire">Secondaire</option>
                    <option value="supérieur">Supérieur</option>
                  </Select>

                  <Input
                    width={"300px"}
                    mt={5}
                    border={"2px solid black"}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    _placeholder={{ color: "black", fontWeight: "black" }}
                  />
                  <Input
                    width={"300px"}
                    mt={5}
                    border={"2px solid black"}
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Mot de passe"
                    _placeholder={{ color: "black", fontWeight: "black" }}
                  />
                  <Input
                    width={"300px"}
                    mt={5}
                    border={"2px solid black"}
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
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
