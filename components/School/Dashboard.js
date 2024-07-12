import React, { useState } from "react";
import { Box, Center, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import GetStudent from "../getStudents";
import SaveStudent from "../saveStudents";
import SaveDiploma from "../saveDiplomas";

function Dashboard() {
  return (
    <>
      <Box className="h-screen " bgColor={"white"}>
        {/* <Center>
          <Heading>Rechercher un etudiant</Heading>
        </Center> */}
        <Box ml={20} mt={10}>
          <GetStudent />
        </Box>
        <Flex mt={10} justifyContent={"space-evenly"}>
          <SaveStudent />
          <SaveDiploma />
        </Flex>
        <SimpleGrid columns={3} spacing={10} mt={20}>
          <Box
            textAlign={"center"}
            height={"fit-content"}
            p={10}
            width={"fit-content"}
            boxShadow={" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"}
          >
            <Text fontSize={"25px"} fontWeight={600}>
              Nombre d{"'"}apprenants
            </Text>
            <Text>150</Text>
          </Box>
          <Box
            textAlign={"center"}
            height={"fit-content"}
            p={10}
            width={"fit-content"}
            boxShadow={" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"}
          >
            <Text fontSize={"25px"} fontWeight={600}>
              Diplômes enregistrés
            </Text>
            <Text>100</Text>
          </Box>
          <Box
            textAlign={"center"}
            height={"fit-content"}
            p={10}
            width={"fit-content"}
            boxShadow={" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"}
          >
            <Text fontSize={"25px"} fontWeight={600}>
              Apprenants Enregistrés
            </Text>
            <Text>100</Text>
          </Box>
          <Box
            textAlign={"center"}
            height={"fit-content"}
            p={10}
            width={"fit-content"}
            boxShadow={" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"}
          >
            <Text fontSize={"25px"} fontWeight={600}>
              Nombres d{"'"}enregistrement possible
            </Text>
            <Text>100</Text>
          </Box>
          <Box
            textAlign={"center"}
            height={"fit-content"}
            p={10}
            width={"fit-content"}
            boxShadow={" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"}
          >
            <Text fontSize={"25px"} fontWeight={600}>
              Nombres d{"'"}enregistrement restant
            </Text>
            <Text>50</Text>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
}

export default Dashboard;
