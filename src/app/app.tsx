import React from 'react';
import AppProviders from './providers';
import Root from '@screens/Root';

interface AppProps {}

export const App: React.FC<AppProps> = ({}) => {
  return (
    <AppProviders>
      <Root />
    </AppProviders>
  );
};

export default App;
