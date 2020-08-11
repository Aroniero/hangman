import React from 'react';
import { WrongLettersContainer, Letter, Heading } from './WrongLetters.style';

const WrongLetters = ({ wrongLetters }) => {
  return (
    <WrongLettersContainer>
      {wrongLetters.length > 0 && <Heading>Wrong letters:</Heading>}
      {
        wrongLetters.map((letter, id) => (
          <Letter key={id}>{letter}</Letter>
        ))
        // .reduce(
        //   (prev, curr) => (prev === null ? [curr] : [prev, ', ', curr]),
        //   null
        // )
      }
    </WrongLettersContainer>
  );
};

export default WrongLetters;
