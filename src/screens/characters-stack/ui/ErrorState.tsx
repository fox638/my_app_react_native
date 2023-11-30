import {Typography} from '@shared/ui/Typography';
import React from 'react';
import styled, {css, useTheme} from 'styled-components/native';
import {Button} from 'react-native';

interface ErrorStateProps {
  reload: () => void;
}

export const ErrorState: React.FC<ErrorStateProps> = ({reload}) => {
  const theme = useTheme();
  return (
    <Container>
      <Message variant="h1" color="warnDark">
        Something happened. Try again
      </Message>
      <Button
        title="Reload"
        onPress={reload}
        color={theme.colors.primaryDark}
      />
    </Container>
  );
};

export default ErrorState;

const Container = styled.View`
  ${({theme}) => css`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.primaryLight};
  `}
`;

const Message = styled(Typography)`
  ${({theme}) => css`
    margin-bottom: ${theme.responsivePxWidth(30)};
  `}
`;
