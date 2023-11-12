import React from "react";
import styled from "styled-components";

const ConainerDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CompanyCTA: React.FC = () => {
  return (
    <ConainerDiv>
      <h1>Business Advisory Services Provider</h1>
      <h4>We know how large objects will act, but things on a small scale.</h4>
      <div>
        <button>Get Quote Now</button>
        <button>Learn More</button>
      </div>
    </ConainerDiv>
  );
};
