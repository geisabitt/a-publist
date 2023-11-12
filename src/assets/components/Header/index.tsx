import React from "react";

import { CompanyCTA } from "./CompanyCTA";
import { Menu } from "./Menu";

export const Header: React.FC = () => {
  return (
    <>
      <Menu />
      <CompanyCTA />
    </>
  );
};

Header.displayName = "Header";
