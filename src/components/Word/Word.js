import React from "react";
import LetterBox from "../LetterBox/LetterBox";
import styled from "styled-components";

const WordContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Word = ({ letters }) => {
  return (
    <WordContainer>
      {letters.map(({ value, isFound }, index) => {
        return <LetterBox key={index} value={value} isFound={isFound} />;
      })}
    </WordContainer>
  );
};

export default Word;
