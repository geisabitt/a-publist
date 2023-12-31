import React from "react";
import styled from "styled-components";

import Background from "../../assets/images/bg/cover.png";
import { BookAppointmentForm } from "./BookAppointmentForm";
import { CompanyCTA } from "./CompanyCTA";
import { Menu } from "./Menu";

const ContainerHeader = styled.div`
  background-image: url(${Background});
  background-size: cover;
`;
const ContainerContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 70%;
  gap: 120px;
  padding: 50px 0;
  margin: 0 auto;

  @media (max-width: 576px) {
    width: 90%;
    flex-direction: column;
  }
`;

export const Header: React.FC = () => {
  return (
    <>
      <ContainerHeader>
        <Menu />
        <ContainerContent>
          <CompanyCTA />
          <BookAppointmentForm />
        </ContainerContent>
      </ContainerHeader>
    </>
  );
};

Header.displayName = "Header";
