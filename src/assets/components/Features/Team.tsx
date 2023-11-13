import React from "react";
import styled from "styled-components";

import iconFacebook from "../../images/icons/imgTeam/iconFacebook.svg";
import iconInstagram from "../../images/icons/imgTeam/iconInstagram.svg";
import iconTwitter from "../../images/icons/imgTeam/iconTwitter.svg";
import UserTeam1 from "../../images/icons/imgTeam/UserTeam1.png";
import UserTeam2 from "../../images/icons/imgTeam/UserTeam2.png";
import UserTeam3 from "../../images/icons/imgTeam/UserTeam3.png";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 80px 10px;
  gap: 80px;
  width: 90%;
  min-width: 328px;
`;
const MainContent = styled.div`
  text-align: center;
`;
const CustomP = styled.p`
  margin: 20px auto;
  max-width: 470px;
  width: 90%;
`;
const ContainerCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 10px;
  max-width: 350px;
  margin-bottom: 50px;
  padding-bottom: 30px;
  width: 100%;
  background-color: #fff;
  border: 1px solid #eee;
  & h6 {
    color: #737373;
  }
`;
const SocialGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
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

            <a href="#">Regina Miles</a>
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

            <a href="#">Regina Miles</a>
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
