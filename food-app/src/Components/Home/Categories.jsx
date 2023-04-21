import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { Text } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <Text
        color={"blackAlpha.500"}
        fontSize="20px"
        _hover={{ color: "var(--hover-color )" }}
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
        color={"blackAlpha.500"}
        fontSize="20px"
        _hover={{ color: "var(--hover-color )" }}
      >
        <ArrowForwardIcon />
      </Text>
    </div>
  );
};
var settings = {
  prevArrow: <PreviousBtn />,
  nextArrow: <NextBtn />,
  infinite: false,
  speed: 500,
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

export const Categories = () => {
  return (
    <div>
      {" "}
      <Slider {...settings}></Slider>
    </div>
  );
};
