import React from "react";

import { Industry } from "./Industry";
import { Team } from "./Team";
import { Testimonials } from "./Testimonials";
import { WhoWeAre } from "./WhoWeAre";

export const Features: React.FC = () => {
  return (
    <>
      <Industry />
      <WhoWeAre />
      <Testimonials />
      <Team />
    </>
  );
};

Features.displayName = "Features";
