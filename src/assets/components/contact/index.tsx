import React from "react";
import styled from "styled-components";

import bgContact from "../../images/icons/bgContact.png";
import { CustomInput, CustomSelect, CustomTextArea } from "../Global.styled";

const BgImage = styled.div`
  width: 100%;
  background-image: url(${bgContact});
  background-size: cover;
`;

const CustomForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  min-width: 328px;
  max-width: 600px;
  padding: 80px 40px;
  width: 100%;
  & h3 {
    width: 100%;
  }
`;
const ContainetTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;
const FormGroup = styled.div`
  display: flex;
  width: 49%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CustomButton = styled.button`
  background-color: #ff7b47;
  padding: 10px 36px;
  color: #fff;
  border: none;
  border-radius: 5px;
  margin-top: 40px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const CustomSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 40px auto;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
  & p {
    margin-top: 10px;
  }
`;

export const Contact: React.FC = () => {
  return (
    <>
      <BgImage>
        <CustomForm>
          <ContainetTitle>
            <h5>Contact Us</h5>
            <h2>Make an Appointment</h2>
          </ContainetTitle>
          <FormGroup>
            <CustomInput
              name="name"
              type="text"
              placeholder="Full Name"
              required
            />
          </FormGroup>
          <FormGroup>
            <CustomInput
              name="email"
              type="email"
              placeholder="example@gmail.com"
              required
            />
          </FormGroup>
          <FormGroup>
            <CustomSelect name="department">
              <option disabled selected>
                Please Select
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </CustomSelect>
          </FormGroup>
          <FormGroup>
            <CustomSelect name="time">
              <option value="option1">4:00 Available</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </CustomSelect>
          </FormGroup>
          <CustomTextArea></CustomTextArea>
          <CustomButton>Book Appointment</CustomButton>
        </CustomForm>
      </BgImage>
      <CustomSection>
        <div className="textGroup">
          <h3>Consulting Agency For Your Business</h3>
          <p>the quick fox jumps over the lazy dog</p>
        </div>
        <CustomButton>Contact Us</CustomButton>
      </CustomSection>
    </>
  );
};

Contact.displayName = "Contact";
