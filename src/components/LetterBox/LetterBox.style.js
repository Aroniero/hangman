import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ disabled }) => (disabled ? 'gray' : '#575757')};
  border-radius: 7px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (${({ theme }) => theme.media.md}) {
    height: 80px;
  }
  @media (${({ theme }) => theme.media.lg}) {
    height: 100px;
  }
`;

export const Letter = styled.p`
  font-family: Roboto;
  font-weight: bold;
  color: white;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSizes.smallest};

  @media (${({ theme }) => theme.media.md}) {
    font-size: ${({ theme }) => theme.fontSizes.small};
  }
  @media (${({ theme }) => theme.media.lg}) {
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }
`;
