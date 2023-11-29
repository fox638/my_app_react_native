import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import CharactersStack from './characters-stack';

interface RootProps {}

export const Root: React.FC<RootProps> = ({}) => {
  return (
    <NavigationContainer>
      <CharactersStack />
    </NavigationContainer>
  );
};

export default Root;
