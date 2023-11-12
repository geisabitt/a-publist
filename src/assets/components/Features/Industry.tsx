import React from "react";
import styled from "styled-components";

const ContainerIndustry = styled.section`
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
  align-items: center;
  max-width: 350px;
  margin-bottom: 50px;
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

export const Industry: React.FC = () => {
  return (
    <>
      <ContainerIndustry>
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
              <p>icone</p> <h5>Business & Finance </h5>
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
              <p>icone</p> <h5>Business & Finance </h5>
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
              <p>icone</p> <h5>Business & Finance </h5>
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
      </ContainerIndustry>
    </>
  );
};

Industry.displayName = "Industry";
