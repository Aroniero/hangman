import React from 'react';
import styled from 'styled-components';

const StyledWrongLetters = styled.div`
  position: absolute;
  top: 5vh;
  right: 400px;
  width: 400px;
`;

const WrongLetters = ({ wrongLetters }) => {
  return (
    <StyledWrongLetters>
      {wrongLetters.length > 0 && <h2>Wrong letters:</h2>}
      {wrongLetters
        .map((letter, id) => <span key={id}>{letter}</span>)
        .reduce(
          (prev, curr) => (prev === null ? [curr] : [prev, ', ', curr]),
          null
        )}
    </StyledWrongLetters>
  );
};

export default WrongLetters;
