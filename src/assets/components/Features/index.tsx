import React from "react";

import { Industry } from "./Industry";
import { WhoWeAre } from "./WhoWeAre";

export const Features: React.FC = () => {
  return (
    <>
      <Industry />
      <WhoWeAre />
    </>
  );
};

Features.displayName = "Features";
