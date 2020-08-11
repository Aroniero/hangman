import React from 'react';
import { Container, Letter } from './LetterBox.style';

const LetterBox = ({ letter }) => {
  return (
    <Container>
      <Letter>{letter}</Letter>
    </Container>
  );
};

export default LetterBox;
