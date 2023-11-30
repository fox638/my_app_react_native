import {useLayoutWidth} from '@shared/ui/layout';
import React from 'react';
import ContentLoader, {Rect} from 'react-content-loader/native';
import styled, {useTheme, css} from 'styled-components/native';

interface ScreenSkeletonProps {}

export const ScreenSkeleton: React.FC<ScreenSkeletonProps> = ({}) => {
  const layout = useLayoutWidth();
  const theme = useTheme();

  return (
    <Container>
      <ContentLoader
        speed={2}
        width={layout?.width}
        viewBox={`0 0 390 ${(layout.height / layout.width) * 390}`}
        backgroundColor={theme.colors.secondaryLight}
        foregroundColor={theme.colors.secondaryDark}
        style={{flex: 1}}>
        <Rect x="10" y="10" width="370" height="70" rx="16" />
        <Rect x="10" y="90" width="370" height="70" rx="16" />
        <Rect x="10" y="170" width="370" height="70" rx="16" />
        <Rect x="10" y="250" width="370" height="70" rx="16" />
        <Rect x="10" y="330" width="370" height="70" rx="16" />
        <Rect x="10" y="410" width="370" height="70" rx="16" />
        <Rect x="10" y="490" width="370" height="70" rx="16" />
        <Rect x="10" y="570" width="370" height="70" rx="16" />
        <Rect x="10" y="650" width="370" height="70" rx="16" />
        <Rect x="10" y="730" width="370" height="70" rx="16" />
        <Rect x="10" y="810" width="370" height="70" rx="16" />
        <Rect x="10" y="890" width="370" height="70" rx="16" />
        <Rect x="10" y="970" width="370" height="70" rx="16" />
      </ContentLoader>
    </Container>
  );
};

export default ScreenSkeleton;

const Container = styled.View`
  ${({theme}) => css`
    flex: 1;
    background-color: ${theme.colors.primaryLight};
  `}
`;
