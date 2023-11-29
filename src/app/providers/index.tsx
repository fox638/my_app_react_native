import React, {PropsWithChildren} from 'react';
import ThemeProvider from './ThemeProvider';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export const AppProviders: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <ThemeProvider>
      <SafeAreaProvider>{children}</SafeAreaProvider>
    </ThemeProvider>
  );
};

export default AppProviders;
