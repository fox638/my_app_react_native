import React, {PropsWithChildren} from 'react';
import ThemeProvider from './ThemeProvider';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import GQLProvider from './GQLProvider';

export const AppProviders: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <GQLProvider>{children}</GQLProvider>
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

export default AppProviders;
