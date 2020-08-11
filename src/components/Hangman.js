import React from 'react';
import styled from 'styled-components';
// import "./Hangman.css";
import Gallow from './HangmanParts/Gallow';
import Head from './HangmanParts/Head';
import LeftLeg from './HangmanParts/LeftLeg';
import LeftFoot from './HangmanParts/LeftFoot';
import Body from './HangmanParts/Body';
import LeftArm from './HangmanParts/LeftArm';
import RightArm from './HangmanParts/RightArm';
import RightFoot from './HangmanParts/RightFoot';
import RightLeg from './HangmanParts/RightLeg';
import Neck from './HangmanParts/Neck';

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
