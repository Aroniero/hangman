import styled from 'styled-components';

export const Container = styled.div`
  /* margin: 0 auto; */
`;

export const WrongLettersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Heading = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.small};

  @media (${({ theme }) => theme.media.md}) {
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }
`;

export const Letter = styled.span`
  margin: 0 10px;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.blue};

  @media (${({ theme }) => theme.media.md}) {
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }
  @media (${({ theme }) => theme.media.xl}) {
    font-size: ${({ theme }) => theme.fontSizes.large};
  }
`;
