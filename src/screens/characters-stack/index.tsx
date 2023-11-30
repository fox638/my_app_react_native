import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CharactersListScreen from './CharactersListScreen';

type CharactersStackScreens = {
  list: undefined;
};

const Stack = createNativeStackNavigator<CharactersStackScreens>();

interface IndexProps {}

export const Index: React.FC<IndexProps> = ({}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="list" component={CharactersListScreen} />
    </Stack.Navigator>
  );
};

export default Index;
