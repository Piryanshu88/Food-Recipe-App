import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styles from "./RecipesCard.module.css";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import {
  getData,
  getDataErr,
  getDataReq,
  getDataSucc,
} from "../../Redux/dataReducer/action";
import { RecipeCard } from "./RecipeCard";
import {
  Button,
  Checkbox,
  Flex,
  Image,
  Radio,
  RadioGroup,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Stack,
  Text,
  Slider,
  Tooltip,
  SliderMark,
} from "@chakra-ui/react";
import { useState } from "react";

export const Recipes = () => {
  const [sliderValue, setSliderValue] = React.useState(10);
  const [showTooltip, setShowTooltip] = React.useState(false);

  const { recipe } = useParams();
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const dispatch = useDispatch();
  const { data } = useSelector((store) => store.dataReducer);

  // pagination
  const handlePage = (v) => {
    setPage(page + v);
    getData(recipe, page + v)
      .then((re) => {
        dispatch(getDataReq());
        dispatch(getDataSucc(re.data.results));
        setMaxPage(Math.ceil(re.data.totalResults / 10));
      })
      .catch((err) => {
        console.log(err.message);
        dispatch(getDataErr());
      });
  };

  useEffect(() => {
    getData(recipe)
      .then((re) => {
        dispatch(getDataReq());
        dispatch(getDataSucc(re.data.results));
        setMaxPage(Math.ceil(re.data.totalResults / 10));
      })
      .catch((err) => {
        console.log(err.message);
        dispatch(getDataErr());
      });
  }, []);
  return (
    <div className={styles.recipes_box}>
      <div className={styles.recipes_filter_box}>
        <Stack>
          <Text color={"var(--text-color)"} fontWeight="500" fontSize={"18px"}>
            Sort By Calories
          </Text>
          <RadioGroup value={""}>
            <Stack>
              <Radio value="1">Sort by low to high</Radio>
              <Radio value="2">Sort by high to low</Radio>
            </Stack>
          </RadioGroup>
        </Stack>

        <Stack>
          <Text color={"var(--text-color)"} fontWeight="500" fontSize={"18px"}>
            Meal Type
          </Text>
          <Stack>
            <Checkbox>Main Course</Checkbox>
            <Checkbox>Side Dish</Checkbox>
            <Checkbox>Dessert</Checkbox>
            <Checkbox>Breakfast</Checkbox>
            <Checkbox>Snack</Checkbox>
          </Stack>
        </Stack>

        <Stack>
          <Text color={"var(--text-color)"} fontWeight="500" fontSize={"18px"}>
            Preparation Time
          </Text>
          <Stack>
            <Checkbox>Max 20 minutes</Checkbox>
            <Checkbox>Max 30 minutes</Checkbox>
            <Checkbox>Max 40 minutes</Checkbox>
            <Checkbox>Max 50 minutes</Checkbox>
            <Checkbox>More than 1 hour</Checkbox>
          </Stack>
        </Stack>

        <Stack>
          <Text color={"var(--text-color)"} fontWeight="500" fontSize={"18px"}>
            Instructions Required
          </Text>
          <RadioGroup value={""}>
            <Stack>
              <Radio value="1">Yes</Radio>
              <Radio value="2">No</Radio>
            </Stack>
          </RadioGroup>
        </Stack>

        <Stack>
          <Text color={"var(--text-color)"} fontWeight="500" fontSize={"18px"}>
            Protien
          </Text>
          <Slider
            id="slider"
            min={10}
            max={100}
            colorScheme="teal"
            onChange={(v) => setSliderValue(v)}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <SliderMark value={25} mt="1" ml="-2.5" fontSize="sm">
              25 grams
            </SliderMark>
            <SliderMark value={50} mt="1" ml="-2.5" fontSize="sm">
              50 grams
            </SliderMark>
            <SliderMark value={75} mt="1" ml="-2.5" fontSize="sm">
              75 grams
            </SliderMark>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <Tooltip
              hasArrow
              bg="teal.500"
              color="white"
              placement="top"
              isOpen={showTooltip}
              label={`${sliderValue} grams`}
            >
              <SliderThumb />
            </Tooltip>
          </Slider>
        </Stack>
      </div>
      <div className={styles.recipes_card_box}>
        <Flex
          padding="10px"
          alignItems={"center"}
          justifyContent="space-between"
        >
          <Flex>
            <Text fontSize={"2xl"} fontWeight="500" color={"var(--text-color)"}>
              Recipes related to {recipe}
            </Text>
          </Flex>
          <Flex alignItems={"center"} gap="10px">
            <Button
              borderRadius={"100%"}
              colorScheme="green"
              variant={"ghost"}
              isDisabled={page == 1}
              color="green.200"
              onClick={() => handlePage(-1)}
            >
              <ArrowBackIcon />
            </Button>
            <Text fontWeight={"500"}>{page}</Text>
            <Button
              isDisabled={page == maxPage}
              borderRadius={"100%"}
              colorScheme="green"
              variant={"ghost"}
              color="green.200"
              onClick={() => handlePage(1)}
            >
              <ArrowForwardIcon />
            </Button>
          </Flex>
        </Flex>
        <div className={styles.recipes_cards}>
          {data?.map((el) => {
            return (
              <Link to="/">
                <RecipeCard {...el} key={el?.id} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
