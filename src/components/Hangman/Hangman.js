import React from "react";
import styled from "styled-components";
// import "./Hangman.css";
import Gallow from "../HangmanParts/Gallow";
import Head from "../HangmanParts/Head";
import LeftLeg from "../HangmanParts/LeftLeg";
import LeftFoot from "../HangmanParts/LeftFoot";
import Body from "../HangmanParts/Body";
import LeftArm from "../HangmanParts/LeftArm";
import RightArm from "../HangmanParts/RightArm";
import RightFoot from "../HangmanParts/RightFoot";
import RightLeg from "../HangmanParts/RightLeg";
import Neck from "../HangmanParts/Neck";

const HangmanContainer = styled.div`
  width: 373px;
  height: 600px;
  position: relative;
`;

const Hangman = () => {
  return (
    <HangmanContainer>
      <Gallow />
      <Head />
      <Neck />
      <Body />
      <LeftArm />
      <RightArm />
      <LeftLeg />
      <LeftFoot />
      <RightLeg />
      <RightFoot />
    </HangmanContainer>
  );
};

export default Hangman;
