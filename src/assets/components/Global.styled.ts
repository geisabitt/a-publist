import styled from "styled-components";

export const SocialGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;
const commonStyles = `
  color: #737373;
  padding: 11px 20px;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid  #BDBDBD;
  box-shadow: none; 
  outline: none;
  width: 100%;

`;
export const CustomInput = styled.input`
  ${commonStyles}
`;
export const CustomSelect = styled.select`
  ${commonStyles}
`;
export const CustomTextArea = styled.textarea`
  ${commonStyles}
`;
