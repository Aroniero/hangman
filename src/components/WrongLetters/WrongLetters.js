import React from 'react';
import {
  Container,
  WrongLettersContainer,
  Letter,
  Heading,
} from './WrongLetters.style';

const WrongLetters = ({ wrongLetters }) => {
  return (
    <Container>
      {wrongLetters.length > 0 && <Heading>Wrong letters:</Heading>}
      <WrongLettersContainer>
        {wrongLetters.map((letter, id) => (
          <Letter key={id}>{letter}</Letter>
        ))}
      </WrongLettersContainer>
    </Container>
  );
};

export default WrongLetters;
