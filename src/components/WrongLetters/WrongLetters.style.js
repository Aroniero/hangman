import styled from 'styled-components';

export const WrongLettersContainer = styled.div`
  position: absolute;
  top: 5vh;
  right: 200px;
  width: 500px;
  overflow-wrap: break-word;
`;

export const Heading = styled.h2`
  font-size: 3rem;
`;

export const Letter = styled.span`
  margin: 0 10px;
  text-transform: uppercase;
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.blue};
`;
