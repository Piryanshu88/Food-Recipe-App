import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./Home/Home";
import { RecipesPage } from "./RecipesPage/RecipesPage";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/recipes/:recipe" element={<RecipesPage />} />
    </Routes>
  );
};
