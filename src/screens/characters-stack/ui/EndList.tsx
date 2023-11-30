import {Typography} from '@shared/ui/Typography';
import React from 'react';
import styled, {css} from 'styled-components/native';

interface EndListProps {}

export const EndList: React.FC<EndListProps> = ({}) => {
  return (
    <Container>
      <Typography variant="h2">End List</Typography>
    </Container>
  );
};

export default EndList;

const Container = styled.View`
  ${({theme}) => css`
    width: 100%;
    height: ${theme.responsivePxWidth(70)};
    align-items: center;
    justify-content: center;
  `}
`;
