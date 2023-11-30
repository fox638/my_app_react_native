import React, {PropsWithChildren, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {LayoutRectangle, StatusBar} from 'react-native';
import styled, {css, useTheme} from 'styled-components/native';

interface MainLayoutProps extends PropsWithChildren {}

export const LayoutContext = React.createContext<LayoutRectangle>({
  height: 621,
  width: 390,
  x: 0,
  y: 0,
});

export const MainLayout: React.FC<MainLayoutProps> = ({children}) => {
  const theme = useTheme();
  const [layout, setLayout] = useState<LayoutRectangle>({
    height: 621,
    width: 390,
    x: 0,
    y: 0,
  });

  return (
    <MainLayoutView edges={['top']}>
      <StatusBar backgroundColor={theme.colors.primaryLight} />
      <Container
        onLayout={event => {
          setLayout(event.nativeEvent.layout);
        }}>
        <LayoutContext.Provider value={layout}>
          {children}
        </LayoutContext.Provider>
      </Container>
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

const Container = styled.View`
  flex: 1;
`;
