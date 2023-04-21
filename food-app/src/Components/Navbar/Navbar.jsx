import {
  Button,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import React from "react";
import styles from "./Navbar.module.css";
import { SearchIcon } from "@chakra-ui/icons";
export const Navbar = () => {
  return (
    <div className={styles.navbar_section}>
      <Flex fontSize={"2xl"} fontWeight="600" color={"green.600"}>
        PIRYANSHU
      </Flex>
      <Flex>
        <Button
          variant={"ghost"}
          borderRadius="0"
          _hover={{
            background: "var(--bg-color)",
            transform: "scale(1.1,1.1)",
          }}
          transition="ease-in 0.5s"
          colorScheme="green"
        >
          Home
        </Button>
        <Button
          variant={"ghost"}
          transition="ease-in 0.5s"
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
          transition="ease-in 0.5s"
          borderRadius="0"
          _hover={{
            background: "var(--bg-color)",
            transform: "scale(1.1,1.1)",
          }}
          colorScheme="green"
        >
          Random Recipe
        </Button>
        <Button
          variant={"ghost"}
          borderRadius="0"
          transition="ease-in 0.5s"
          _hover={{
            background: "var(--bg-color)",
            transform: "scale(1.1,1.1)",
          }}
          colorScheme="green"
        >
          Contact us
        </Button>
      </Flex>
      <div className={styles.desktop_search_bar}>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.500" />}
          />
          <Input
            placeholder="Type any recipes name here"
            focusBorderColor="green.300"
            borderColor={"green.300"}
            width="100%"
          />
        </InputGroup>
      </div>
    </div>
  );
};
