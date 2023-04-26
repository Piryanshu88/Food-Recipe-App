import { Button, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

export const RecipeCard = ({ image, title }) => {
  return (
    <Stack opacity={"0.9"}>
      <Image src={image} alt="" borderRadius={"10px"} />
      <Text fontWeight={"bold"} color={"var(--text-color)"}>
        {title}
      </Text>
      <Button colorScheme={"green"} fontFamily="cursive">
        See Recipe
      </Button>
    </Stack>
  );
};
