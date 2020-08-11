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
  LeftFoot,
  RightLeg,
  RightFoot,
} from '../HangmanParts/HangmanParts';

const Hangman = ({ wrongLetters }) => {
  const errors = wrongLetters.length;
  return (
    <Container>
      <Gallow />
      {errors > 0 && <Head />}
      {errors > 1 && <Neck />}
      {errors > 2 && <Body />}
      {errors > 3 && <LeftArm />}
      {errors > 4 && <RightArm />}
      {errors > 5 && <LeftLeg />}
      {errors > 6 && <LeftFoot />}
      {errors > 7 && <RightLeg />}
      {errors > 8 && <RightFoot />}
    </Container>
  );
};

export default Hangman;
