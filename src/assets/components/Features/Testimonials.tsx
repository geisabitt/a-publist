import React from "react";
import styled from "styled-components";

import iconStar from "../../images/icons/imgTestimonials/iconStar.svg";
import iconStarClear from "../../images/icons/imgTestimonials/iconStarClear.svg";
import userAvatar from "../../images/icons/imgTestimonials/userAvatar.png";

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
  padding: 30px;
  max-width: 350px;
  margin-bottom: 50px;
  width: 100%;
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
