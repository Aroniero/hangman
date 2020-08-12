import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ disabled }) => (disabled ? 'gray' : '#575757')};
  border-radius: 12px;
  width: 100px;
  height: 123px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Letter = styled.p`
  font-family: Roboto;
  font-weight: bold;
  color: white;
  text-transform: uppercase;
  font-size: 60px;
`;
