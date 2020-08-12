import React from 'react';
import { Container, Letter } from './LetterBox.style';

const LetterBox = ({ letter, disabled }) => {
  return (
    <Container disabled={disabled}>
      <Letter>{letter}</Letter>
    </Container>
  );
};

export default LetterBox;
