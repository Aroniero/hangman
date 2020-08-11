import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1300px;
  margin: 40px auto;
  display: flex;
  justify-content: center;
  /* position: absolute;
  top: 0;
  left: 0; */
`;
const Message = () => {
  return <Container>You have already entered this letter</Container>;
};

export default Message;
