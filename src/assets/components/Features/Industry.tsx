import React from "react";
import styled from "styled-components";

import iconNotebook from "../../images/icons/iconNotebook.svg";
import iconSolidAward from "../../images/icons/iconSolidAward.svg";
import iconUsersLine from "../../images/icons/iconUsersLine.svg";
import {
  Container,
  ContainerCard,
  CustomCard,
  CustomP,
  MainContent,
} from "./Features.styled";

const Card = styled(CustomCard)`
  & a {
    text-decoration: none;
    font-weight: bold;
    color: #ff7b47;
    padding: 10px 0;
  }
`;
const CardTop = styled.div`
  background-color: #a9d6ff;
  border-radius: 30px 30px 0 0;
  width: 100%;
  padding: 30px 50px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;
const CardUl = styled.ul`
  list-style: none;
  padding: 30px 50px;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #fff;
  border: 1px solid #a9d6ff;
  border-radius: 10px;
  margin-top: -5px;

  & li::before {
    content: "-";
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
`;
const CustomIcon = styled.img`
  padding: 30px;
  color: #ff7b47;
  background-color: #fff;
  border-radius: 50%;
  margin: 10px;
`;

export const Industry: React.FC = () => {
  return (
    <>
      <Container>
        <MainContent>
          <h2>Industry</h2>
          <CustomP>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </CustomP>
        </MainContent>
        <ContainerCard>
          <Card>
            <CardTop>
              <CustomIcon src={iconUsersLine} />
              <h5>Business & Finance </h5>
            </CardTop>
            <CardUl>
              <li>The best products start with Figma</li>
              <li>Lightning fast prototyping</li>
              <li>Fastest way to organize</li>
              <li>Work at the speed of thought.</li>

              <a href="#">Learn More</a>
            </CardUl>
          </Card>
          <Card>
            <CardTop>
              <CustomIcon src={iconSolidAward} />
              <h5>Business & Finance </h5>
            </CardTop>
            <CardUl>
              <li>The best products start with Figma</li>
              <li>Lightning fast prototyping</li>
              <li>Fastest way to organize</li>
              <li>Work at the speed of thought.</li>

              <a href="#">Learn More</a>
            </CardUl>
          </Card>
          <Card>
            <CardTop>
              <CustomIcon src={iconNotebook} />
              <h5>Business & Finance </h5>
            </CardTop>
            <CardUl>
              <li>The best products start with Figma</li>
              <li>Lightning fast prototyping</li>
              <li>Fastest way to organize</li>
              <li>Work at the speed of thought.</li>

              <a href="#">Learn More</a>
            </CardUl>
          </Card>
        </ContainerCard>
      </Container>
    </>
  );
};

Industry.displayName = "Industry";
