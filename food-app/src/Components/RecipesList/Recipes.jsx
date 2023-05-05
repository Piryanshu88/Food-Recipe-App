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
import { Button, Flex, Image, Text } from "@chakra-ui/react";
import { useState } from "react";

export const Recipes = () => {
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
        <Text>Filter Box</Text>
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
