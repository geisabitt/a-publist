import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background-color: #fff;
  display: flex;
  width: 80%;
  max-width: 328px;
  padding: 40px;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0px 13px 19px 0px rgba(0, 0, 0, 0.07);
`;
const CustomH3 = styled.h3`
  text-align: center;
  margin-bottom: 40px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const commonStyles = `
  color: #737373;
  padding: 11px 20px;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid  #BDBDBD;
  box-shadow: none; 
  outline: none;

`;
const CustomInput = styled.input`
  ${commonStyles}
`;

const CustomSelect = styled.select`
  ${commonStyles}
`;

const CustomButton = styled.button`
  background-color: #ff7b47;
  padding: 10px 36px;
  margin-top: 40px;
  width: 100%;
  color: #fff;
  border: none;
  border-radius: 5px;
`;

export const BookAppointmentForm: React.FC = () => {
  return (
    <>
      <Card>
        <form>
          <CustomH3>Book Appointment</CustomH3>
          <FormGroup>
            <label htmlFor="name">Name *</label>
            <CustomInput
              name="name"
              type="text"
              placeholder="Full Name"
              required
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="email">Email *</label>
            <CustomInput
              name="email"
              type="email"
              placeholder="example@gmail.com"
              required
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="department">Department *</label>
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
            <label htmlFor="time">Time *</label>
            <CustomSelect name="time">
              <option value="option1">4:00 Available</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </CustomSelect>
          </FormGroup>
          <CustomButton>Book Appointment</CustomButton>
        </form>
      </Card>
    </>
  );
};

BookAppointmentForm.displayName = "BookAppointmentForm";
