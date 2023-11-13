import React from "react";
import styled from "styled-components";

import iconFacebook from "../../assets/images/icons/imgFooter/iconFacebook.svg";
import iconInstagram from "../../assets/images/icons/imgFooter/iconInstagram.svg";
import iconTwitter from "../../assets/images/icons/imgFooter/iconTwitter.svg";
import iconYoutube from "../../assets/images/icons/imgFooter/iconYoutube.svg";
import { SocialGroup } from "../Global.styled";

const ContainerBg = styled.section`
  background-color: #17213c;
  color: #fff;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding-top: 80px;
  padding-bottom: 80px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  width: 80%;
  margin: 40px auto;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const BrandFooter = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;
const AjustFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-items: center;
  gap: 30px;
`;
const CustomUl = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  width: 12%;
  min-width: 120px;
  & li {
    margin-bottom: 20px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const CustomForm = styled.form`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;
const FormGroup = styled.div`
  margin-top: 10px;
  width: 100%;
`;
const CustomInput = styled.input`
  padding: 10px;
  border: 1px solid #fff;
  border-radius: 5px 0 0 5px;
  width: 65%;
`;

const CustomButton = styled.button`
  background-color: #ff7b47;
  padding: 10px;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 0 5px 5px 0;
  width: 35%;
`;

export const Footer: React.FC = () => {
  return (
    <>
      <ContainerBg>
        <Container>
          <BrandFooter>
            <h3>Publist</h3>
            <SocialGroup>
              <img src={iconFacebook}></img>
              <img src={iconInstagram}></img>
              <img src={iconTwitter}></img>
              <img src={iconYoutube}></img>
            </SocialGroup>
          </BrandFooter>
        </Container>
        <Container>
          <AjustFooter>
            <CustomUl>
              <li>
                <h5>Company Info</h5>
              </li>
              <li>About Us</li>
              <li>Carrier</li>
              <li>We are hiring</li>
              <li>Blog</li>
            </CustomUl>
            <CustomUl>
              <li>
                <h5>Legal</h5>
              </li>
              <li>About Us</li>
              <li>Carrier</li>
              <li>We are hiring</li>
              <li>Blog</li>
            </CustomUl>
            <CustomUl>
              <li>
                <h5>Features</h5>
              </li>
              <li>About Us</li>
              <li>Carrier</li>
              <li>We are hiring</li>
              <li>Blog</li>
            </CustomUl>
            <CustomUl>
              <li>
                <h5>Resources</h5>
              </li>
              <li>About Us</li>
              <li>Carrier</li>
              <li>We are hiring</li>
              <li>Blog</li>
            </CustomUl>

            <CustomForm>
              <h5>Get In Touch</h5>
              <FormGroup>
                <CustomInput type="email" placeholder="Your Email" />
                <CustomButton>Subscribe</CustomButton>
              </FormGroup>
            </CustomForm>
          </AjustFooter>
        </Container>
        <Container>
          <h6>Made With Love By Figmaland All Right Reserved </h6>
        </Container>
      </ContainerBg>
    </>
  );
};

Footer.displayName = "Footer";
