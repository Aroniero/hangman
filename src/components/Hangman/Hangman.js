import React from 'react';
import { Container } from './Hangman.style';
import {
  Gallow,
  Head,
  Neck,
  Body,
  RightArm,
  LeftArm,
  LeftLeg,
  RightLeg,
} from '../HangmanParts/HangmanParts';

const Hangman = ({ wrongLetters }) => {
  const errors = wrongLetters.length;
  return (
    <Container>
      {errors === 0 && <Gallow />}
      {errors === 1 && <Head />}
      {errors === 2 && <Neck />}
      {errors === 3 && <Body />}
      {errors === 4 && <LeftArm />}
      {errors === 5 && <RightArm />}
      {errors === 6 && <LeftLeg />}
      {errors === 7 && <RightLeg />}
    </Container>
  );
};

export default Hangman;
