import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: gray;
  opacity: 0.7;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  background-color: white;
  padding: 20px 30px;
  border-radius: 10px;
`;

export const Button = styled.button`
  display: block;
  width: 100%;
  max-width: 150px;
  margin: 10px auto;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid white;
`;
