import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styles from "./RecipesCard.module.css";
import {
  getData,
  getDataErr,
  getDataReq,
  getDataSucc,
} from "../../Redux/dataReducer/action";
import { RecipeCard } from "./RecipeCard";
import { Image, Text } from "@chakra-ui/react";

export const Recipes = () => {
  const { recipe } = useParams();

  const dispatch = useDispatch();
  const { data } = useSelector((store) => store.dataReducer);
  useEffect(() => {
    getData(recipe)
      .then((re) => {
        dispatch(getDataReq());
        dispatch(getDataSucc(re.data.results));
        console.log(data);
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
        <div>
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
