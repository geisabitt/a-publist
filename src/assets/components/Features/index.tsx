import React from "react";

import { Industry } from "./Industry";
import { Testimonials } from "./Testimonials";
import { WhoWeAre } from "./WhoWeAre";

export const Features: React.FC = () => {
  return (
    <>
      <Industry />
      <WhoWeAre />
      <Testimonials />
    </>
  );
};

Features.displayName = "Features";
