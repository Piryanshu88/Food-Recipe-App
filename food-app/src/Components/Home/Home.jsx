import React from "react";
import img from "../../Assets/recipeHome.png";
import styles from "./Home.module.css";
import { Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Categories } from "./Categories";
export const Home = () => {
  return (
    <div>
      <div className={styles.home_section}>
        <div className={styles.home_section_text}>
          <Heading
            lineHeight={1.1}
            fontWeight={800}
            fontSize={{ base: "3xl", sm: "4xl", lg: "7xl" }}
          >
            From Kitchen to Table :
            <Text as={"span"} color={"green.400"} fontWeight="800">
              {" "}
              Cook Healthy and Delicious Meals with us.
            </Text>
          </Heading>
        </div>
        <Image src={img} alt="" />
      </div>

      <div className={styles.category_section}>
        <Flex
          marginTop={"30px"}
          paddingTop="40px"
          justifyContent={"center"}
          flexDirection="column"
          alignItems="center"
        >
          <Text fontSize={"xl"} fontWeight="500">
            Our Hot Recipes
          </Text>
          <p className={styles.text_underline_tag}></p>
        </Flex>
        <Categories />
      </div>
    </div>
  );
};
