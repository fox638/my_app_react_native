import {API_URL} from '@env';
import React from 'react';
import styled, {css} from 'styled-components/native';
import AppProviders from './providers';

interface AppProps {}

export const App: React.FC<AppProps> = ({}) => {
  return (
    <AppProviders>
      <Test>{API_URL}</Test>
    </AppProviders>
  );
};

export default App;

const Test = styled.Text`
  ${({theme}) => css`
    color: ${theme.colors.primaryDark};
  `}
`;
