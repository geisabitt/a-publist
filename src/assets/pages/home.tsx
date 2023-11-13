import React from "react";

import { Contact } from "../components/contact";
import { Features } from "../components/Features";
import { Header } from "../components/Header";

export const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Features />
      <Contact />
    </>
  );
};

Home.displayName = "Home";
