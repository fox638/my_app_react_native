import {API_URL} from '@env';
import React from 'react';
import styled from 'styled-components/native';

interface AppProps {}

export const App: React.FC<AppProps> = ({}) => {
  return <Test>{API_URL}</Test>;
};

export default App;

const Test = styled.Text`
  color: red;
`;
