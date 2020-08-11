import React from 'react';
import styled from 'styled-components';

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
} from './HangmanParts/HangmanParts';

const HangmanContainer = styled.div`
  top: 5vh;
  width: 373px;
  height: 600px;
  position: relative;
`;

const Hangman = ({ wrongLetters }) => {
  const errors = wrongLetters.length;
  return (
    <HangmanContainer>
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
    </HangmanContainer>
  );
};

export default Hangman;
