import {
  Avatar,
  Box,
  Center,
  Flex,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";

function StudentView() {
  return (
    <Flex>
      <Box className="h-screen " bgColor={"#f2eae0"} p={20}>
        <Center>
          <Avatar />
        </Center>
        <Center>
          <Heading>Nom du groupe</Heading>
        </Center>
        <SimpleGrid
          columns={1}
          mt={40}
          fontWeight={500}
          fontSize={"25px"}
          spacing={10}
        >
          <Text> Accueil</Text>
          <Text> Apprenants</Text>
          <Text> Diplômes </Text>
          <Text> Profils</Text>
          {/* <Text> View</Text> */}
        </SimpleGrid>
        <Flex mt={"20vh"}>
          <Text>Logout</Text>
          <Text>Deconnexion</Text>
        </Flex>
      </Box>
      <Box className="h-screen " bgColor={"white"}></Box>
    </Flex>
  );
}

export default StudentView;
