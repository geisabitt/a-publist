import React from "react";
import styled from "styled-components";

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;
const Button = styled.button`
  margin-top: 40px;
`;

export const BookAppointmentForm: React.FC = () => {
  return (
    <>
      <form>
        <h3>Book Appointment</h3>
        <FormGroup>
          <label htmlFor="name">Name *</label>
          <input name="name" type="text" required />
        </FormGroup>
        <FormGroup>
          <label htmlFor="email">Email *</label>
          <input name="email" type="email" required />
        </FormGroup>
        <FormGroup>
          <label htmlFor="department">Department *</label>
          <select name="department">
            <option disabled selected>
              Please Select
            </option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </FormGroup>
        <FormGroup>
          <label htmlFor="time">Time *</label>
          <select name="time">
            <option value="option1">4:00 Available</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </FormGroup>
        <Button>Book Appointment</Button>
      </form>
    </>
  );
};

BookAppointmentForm.displayName = "BookAppointmentForm";
