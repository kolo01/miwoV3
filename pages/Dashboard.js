import EnterpriseView from "@/components/Enterprise/EnterpriseView";
import SchoolView from "@/components/School/SchoolView";
import StudentView from "@/components/Student/StudentView";
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

function Dashboard() {
  const [role, setRole] = useState("Enterprise");
  return (
    <>
      {role == "Enterprise" ? (
        <EnterpriseView />
      ) : role == "School" ? (
        <SchoolView />
      ) : role == "Student" ? (
        <StudentView />
      ) : (
        <></>
      )}
    </>
  );
}

export default Dashboard;
