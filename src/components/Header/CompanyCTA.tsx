import React from "react";
import styled from "styled-components";

const ConainerDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
const H1 = styled.h1`
  font-size: 40px;
  font-weight: 800;
  letter-spacing: 0.2px;
  @media (max-width: 768px) {
    text-align: center;
  }
`;
const H4 = styled.h4`
  padding: 35px 0;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const ButtonPrimaryRadius = styled.button`
  background-color: #ff7b47;
  padding: 10px 36px;
  color: #fff;
  border: none;
  border-radius: 37px;
  margin: 10px 10px;
`;
const ButtonSecondaryRadius = styled.button`
  background-color: #fff;
  padding: 10px 36px;
  color: #0d5c63;
  border: 1px solid #0d5c63;
  border-radius: 37px;
  margin: 10px 10px;
`;
const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const CompanyCTA: React.FC = () => {
  return (
    <ConainerDiv>
      <H1>Business Advisory Services Provider</H1>
      <H4>We know how large objects will act, but things on a small scale.</H4>
      <ContainerButton>
        <ButtonPrimaryRadius>Get Quote Now</ButtonPrimaryRadius>
        <ButtonSecondaryRadius>Learn More</ButtonSecondaryRadius>
      </ContainerButton>
    </ConainerDiv>
  );
};
