import React from "react";
import styled from "styled-components";

const LetterContainer = styled.div`
  background: #575757;
  border-radius: 16px;
  width: 100px;
  height: 123px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Letter = styled.p`
  font-family: Roboto;
  font-weight: bold;
  color: white;
  text-transform: uppercase;
  font-size: 74px;
  display: ${({ isFound }) => (isFound ? "block" : "none")};
`;

const LetterBox = ({ value, isFound }) => {
  return (
    <LetterContainer>
      <Letter isFound={isFound}>{isFound && value}</Letter>
    </LetterContainer>
  );
};

export default LetterBox;
