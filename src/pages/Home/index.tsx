import React from "react";

import { Contact } from "../../components/Contact";
import { Features } from "../../components/Features";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

export const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Features />
      <Contact />
      <Footer />
    </>
  );
};

Home.displayName = "Home";
