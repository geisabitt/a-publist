import React from "react";

import { Features } from "../components/Features";
import { Header } from "../components/Header";

export const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Features />
    </>
  );
};

Home.displayName = "Home";
