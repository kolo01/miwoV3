import EnterpriseView from "@/components/Enterprise/EnterpriseView";
import SchoolView from "@/components/School/SchoolView";
import StudentView from "@/components/Student/StudentView";
import { authentic } from "@/utils/Firebase";
import {
  Avatar,
  Box,
  Center,
  Flex,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function Dashboard() {
  const router = useRouter();
  const [role, setRole] = useState("");

  useEffect(() => {
    onAuthStateChanged(authentic, async (user) => {
      if (user) {
        setRole(sessionStorage.getItem("role"));
      } else {
        setRole("");
        router.push("/Login");
      }
    });
  }, [role, router]);
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
