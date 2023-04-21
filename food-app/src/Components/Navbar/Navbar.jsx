import { Button, Flex, Input } from "@chakra-ui/react";
import React from "react";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <div className={styles.navbar_section}>
      <Flex fontSize={"2xl"} fontWeight="600" color={"green.600"}>
        PIRYANSHU
      </Flex>
      <Flex gap={"14px"}>
        <Button
          variant={"ghost"}
          borderRadius="0"
          _hover={{
            background: "var(--bg-color)",
            transform: "scale(1.1,1.1)",
          }}
          colorScheme="green"
        >
          Home
        </Button>
        <Button
          variant={"ghost"}
          borderRadius="0"
          _hover={{
            background: "var(--bg-color)",
            transform: "scale(1.1,1.1)",
          }}
          colorScheme="green"
        >
          About
        </Button>
        <Button
          variant={"ghost"}
          borderRadius="0"
          _hover={{
            background: "var(--bg-color)",
            transform: "scale(1.1,1.1)",
          }}
          colorScheme="green"
        >
          Random Recipe
        </Button>
      </Flex>
      <Flex>
        <Input />
      </Flex>
    </div>
  );
};
