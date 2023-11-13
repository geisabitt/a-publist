import React from "react";
import styled from "styled-components";

import iconStar from "../../images/icons/imgTestimonials/iconStar.svg";
import iconStarClear from "../../images/icons/imgTestimonials/iconStarClear.svg";
import userAvatar from "../../images/icons/imgTestimonials/userAvatar.png";
import {
  Container,
  ContainerCard,
  CustomCard,
  CustomP,
  MainContent,
} from "./Features.styled";

const Card = styled(CustomCard)`
  margin-bottom: 50px;
  gap: 10px;
  background-color: #fff;
  border: 1px solid #a9d6ff;
  border-radius: 10px;
  & a {
    text-decoration: none;
    font-weight: bold;
    color: #ff7b47;
    padding: 10px 0;
    width: 60%;
    margin-left: 15px;
  }
  & h6 {
    margin-left: 65px;
    margin-top: -20px;
  }
`;

const CardGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Testimonials: React.FC = () => {
  return (
    <>
      <Container>
        <MainContent>
          <h2>What Clients Say</h2>
          <CustomP>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </CustomP>
        </MainContent>
        <ContainerCard>
          <Card>
            <CardGroup>
              <img src={iconStar} alt="star" />
              <img src={iconStar} alt="star" />
              <img src={iconStar} alt="star" />
              <img src={iconStar} alt="star" />
              <img src={iconStarClear} alt="star clear" />
            </CardGroup>
            <CustomP>
              Slate helps you see how many more days you need to work to reach
              your financial goal.
            </CustomP>
            <CardGroup>
              <img src={userAvatar} />
              <a href="#">Regina Miles</a>
              <h6>Designer</h6>
            </CardGroup>
          </Card>
          <Card>
            <CardGroup>
              <img src={iconStar} alt="star" />
              <img src={iconStar} alt="star" />
              <img src={iconStar} alt="star" />
              <img src={iconStar} alt="star" />
              <img src={iconStarClear} alt="star clear" />
            </CardGroup>
            <CustomP>
              Slate helps you see how many more days you need to work to reach
              your financial goal.
            </CustomP>
            <CardGroup>
              <img src={userAvatar} />
              <a href="#">Regina Miles</a>
              <h6>Designer</h6>
            </CardGroup>
          </Card>
          <Card>
            <CardGroup>
              <img src={iconStar} alt="star" />
              <img src={iconStar} alt="star" />
              <img src={iconStar} alt="star" />
              <img src={iconStar} alt="star" />
              <img src={iconStarClear} alt="star clear" />
            </CardGroup>
            <CustomP>
              Slate helps you see how many more days you need to work to reach
              your financial goal.
            </CustomP>
            <CardGroup>
              <img src={userAvatar} />
              <a href="#">Regina Miles</a>
              <h6>Designer</h6>
            </CardGroup>
          </Card>
        </ContainerCard>
      </Container>
    </>
  );
};

Testimonials.displayName = "Testimonials";
