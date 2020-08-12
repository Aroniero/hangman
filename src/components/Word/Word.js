import React from 'react';
import LetterBox from '../LetterBox/LetterBox';
import { WordContainer } from './Word.style';

import createDisabledLetters from '../../utils/createDisabledLetters';

const Word = ({ selectedWord, correctLetters }) => {
  const disabledLetters = createDisabledLetters(selectedWord);

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
