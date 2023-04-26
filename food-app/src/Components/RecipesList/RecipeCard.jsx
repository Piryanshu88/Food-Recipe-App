import { Image, Text } from "@chakra-ui/react";
import React from "react";

export const RecipeCard = ({ image, title }) => {
  console.log(image, title);
  return (
    <div>
      <Image src={image} alt="" />
      <Text>{title}</Text>
    </div>
  );
};
