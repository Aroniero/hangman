import styled from 'styled-components';

import backgroundImg from './assets/images/backgroundImg.png';

export const GameContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-position: bottom right;
  background-size: 70%;

  @media (${({ theme }) => theme.media.md}) {
    background-size: 50%;
  }
  @media (${({ theme }) => theme.media.lg}) {
    background-size: 40%;
  }
  @media (${({ theme }) => theme.media.xl}) {
    background-size: 30%;
  }
`;

export const Header = styled.div`
  padding-top: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;
  min-height: 600px;
`;
