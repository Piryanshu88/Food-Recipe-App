import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Home.module.css";
import React from "react";
import Slider from "react-slick";
import chicken from "../../Assets/chicken.png";
import salad from "../../Assets/salad.png";
import fish from "../../Assets/fish.png";
import drinks from "../../Assets/drinks.png";
import fruits from "../../Assets/fruits.png";
import pasta from "../../Assets/pasta.png";
import icecream from "../../Assets/icecream.png";
import dessert from "../../Assets/dessert.png";
import rice from "../../Assets/rice.png";
import curry from "../../Assets/curry.png";
import spa from "../../Assets/spaghetti.png";

const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <Text
        color={"green.500"}
        fontSize="20px"
        _hover={{ color: "var(--bg-color)" }}
        cursor="pointer"
      >
        <ArrowBackIcon />{" "}
      </Text>
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <Text
        color={"green.500"}
        fontSize="20px"
        _hover={{ color: "var(--bg-color)" }}
        cursor="pointer"
      >
        <ArrowForwardIcon />
      </Text>
    </div>
  );
};
var settings = {
  prevArrow: <PreviousBtn />,
  nextArrow: <NextBtn />,
  infinite: true,
  dots: false,
  speed: 500,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  cssEase: "linear",
  slidesToShow: 8,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

let recipe = [
  {
    name: "Chicken",
    img: chicken,
    url: "chicken",
  },
  {
    name: "Salad",
    img: salad,
    url: "salad",
  },
  {
    name: "Drinks",
    img: drinks,
    url: "drinks",
  },
  {
    name: "Pasta",
    img: pasta,
    url: "pasta",
  },
  {
    name: "Spaghetti",
    img: spa,
    url: "spaghetti",
  },
  {
    name: "Rice",
    url: "rice",
    img: rice,
  },
  {
    name: "Ice Cream",
    img: icecream,
    url: "icecream",
  },
  {
    name: "Fruits",
    img: fruits,
    url: "fruits",
  },
  {
    name: "Desserts",
    img: dessert,
    url: "desserts",
  },
  {
    name: "Curry",
    img: curry,
    url: "curry",
  },
  {
    name: "Fish",
    img: fish,
    url: "fish",
  },
];

export const Categories = () => {
  return (
    <div className={styles.categories_box}>
      {" "}
      <Slider {...settings} arrows={false}>
        {recipe?.map((el, i) => {
          return (
            <Stack
              cursor={"pointer"}
              textAlign={"center"}
              key={i}
              justifyContent={"center"}
              alignItems="center"
              padding={"10px"}
              _hover={{ transform: "scale(1.4)", transition: "800ms" }}
            >
              <Image
                src={el?.img}
                margin="auto"
                // _hover={{ transform: "scale(1.4)", transition: "800ms" }}
              />
              <Text fontWeight={"500"}>{el?.name}</Text>
            </Stack>
          );
        })}
      </Slider>
    </div>
  );
};
