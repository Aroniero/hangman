import React from 'react';
import LetterBox from './LetterBox';
import styled from 'styled-components';

const WordContainer = styled.div`
  max-width: 1300px;
  margin: 100px auto 0;
  display: flex;
  justify-content: center;
  gap: 15px;
  align-items: center;
`;

const Word = ({ selectedWord, correctLetters }) => {
  return (
    <WordContainer>
      {selectedWord.split('').map((letter, id) => {
        return (
          <LetterBox
            key={id}
            letter={correctLetters.includes(letter) ? letter : ''}
          />
        );
      })}
    </WordContainer>
  );
};

export default Word;
