import React from 'react';
import { WrongLettersContainer } from './WrongLetters.style';

const WrongLetters = ({ wrongLetters }) => {
  return (
    <WrongLettersContainer>
      {wrongLetters.length > 0 && <h2>Wrong letters:</h2>}
      {wrongLetters
        .map((letter, id) => <span key={id}>{letter}</span>)
        .reduce(
          (prev, curr) => (prev === null ? [curr] : [prev, ', ', curr]),
          null
        )}
    </WrongLettersContainer>
  );
};

export default WrongLetters;
