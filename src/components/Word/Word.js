import React from 'react';
import LetterBox from '../LetterBox/LetterBox';
import { WordContainer } from './Word.style';

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
