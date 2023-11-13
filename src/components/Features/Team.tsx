import React from "react";
import styled from "styled-components";

import iconFacebook from "../../assets/images/icons/imgTeam/iconFacebook.svg";
import iconInstagram from "../../assets/images/icons/imgTeam/iconInstagram.svg";
import iconTwitter from "../../assets/images/icons/imgTeam/iconTwitter.svg";
import UserTeam1 from "../../assets/images/icons/imgTeam/UserTeam1.png";
import UserTeam2 from "../../assets/images/icons/imgTeam/UserTeam2.png";
import UserTeam3 from "../../assets/images/icons/imgTeam/UserTeam3.png";
import { SocialGroup } from "../Global.styled";
import {
  Container,
  ContainerCard,
  CustomCard,
  CustomP,
  MainContent,
} from "./Features.styled";

const Card = styled(CustomCard)`
  padding: 0 0 30px 0;
  gap: 10px;
  text-align: center;
  margin-bottom: 50px;
  background-color: #fff;
  border: 1px solid #eee;
  & h6 {
    color: #737373;
  }
`;

export const Team: React.FC = () => {
  return (
    <>
      <Container>
        <MainContent>
          <h2>Meet Our Team</h2>
          <CustomP>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </CustomP>
        </MainContent>
        <ContainerCard>
          <Card>
            <img src={UserTeam1} alt="Picture User Team" />
            <CustomP>
              Slate helps you see how many more days you need to work to reach
              your financial goal.
            </CustomP>
            <h5>Regina Miles</h5>
            <h6>Designer</h6>
            <SocialGroup>
              <img src={iconFacebook} alt="icon Facebook" />
              <img src={iconInstagram} alt="icon Instagram" />
              <img src={iconTwitter} alt="icon Twitter" />
            </SocialGroup>
          </Card>

          <Card>
            <img src={UserTeam2} alt="Picture User Team" />

            <CustomP>
              Slate helps you see how many more days you need to work to reach
              your financial goal.
            </CustomP>
            <h5>Regina Miles</h5>
            <h6>Designer</h6>
            <SocialGroup>
              <img src={iconFacebook} alt="icon Facebook" />
              <img src={iconInstagram} alt="icon Instagram" />
              <img src={iconTwitter} alt="icon Twitter" />
            </SocialGroup>
          </Card>
          <Card>
            <img src={UserTeam3} alt="Picture User Team" />
            <CustomP>
              Slate helps you see how many more days you need to work to reach
              your financial goal.
            </CustomP>
            <h5>Regina Miles</h5>
            <h6>Designer</h6>
            <SocialGroup>
              <img src={iconFacebook} alt="icon Facebook" />
              <img src={iconInstagram} alt="icon Instagram" />
              <img src={iconTwitter} alt="icon Twitter" />
            </SocialGroup>
          </Card>
        </ContainerCard>
      </Container>
    </>
  );
};
Team.displayName = "Team";
