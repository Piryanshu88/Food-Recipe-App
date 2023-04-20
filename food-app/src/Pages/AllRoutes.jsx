import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./Home/Home";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};
