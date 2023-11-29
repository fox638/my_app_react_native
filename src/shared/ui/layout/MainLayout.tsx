import React, {PropsWithChildren} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import styled, {css, useTheme} from 'styled-components/native';

interface MainLayoutProps extends PropsWithChildren {}

export const MainLayout: React.FC<MainLayoutProps> = ({children}) => {
  const theme = useTheme();
  return (
    <MainLayoutView edges={['top']}>
      <StatusBar backgroundColor={theme.colors.primaryLight} />
      {children}
    </MainLayoutView>
  );
};

export default MainLayout;

const MainLayoutView = styled(SafeAreaView)`
  ${({theme}) => css`
    flex: 1;
    position: relative;
    background-color: ${theme.colors.primaryLight};
    padding-bottom: 0;
  `}
`;
