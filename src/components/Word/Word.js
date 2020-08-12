import React from 'react';
import LetterBox from '../LetterBox/LetterBox';
import { WordContainer } from './Word.style';

const Word = ({ selectedWord, correctLetters }) => {
  console.log(selectedWord.length);
  const numberOfDisabledLetters = 10 - selectedWord.length;

  const disabledLetters = Array.from(
    { length: numberOfDisabledLetters },
    () => ''
  );
  console.log(disabledLetters);
  return (
    <WordContainer>
      {disabledLetters.map((disabledLetter, id) => {
        return (
          <LetterBox key={id} disabled>
            {disabledLetter}
          </LetterBox>
        );
      })}

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
