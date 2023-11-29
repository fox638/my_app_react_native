import React from 'react';
import AppProviders from './providers';
import Root from '@screens/Root';
import {MainLayout} from '@shared/ui/layout';

interface AppProps {}

export const App: React.FC<AppProps> = ({}) => {
  return (
    <AppProviders>
      <MainLayout>
        <Root />
      </MainLayout>
    </AppProviders>
  );
};

export default App;
