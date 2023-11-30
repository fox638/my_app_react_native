import React from 'react';
import {ActivityIndicator} from 'react-native';
import styled, {css} from 'styled-components/native';

interface ItemsLoadingProps {}

export const ItemsLoading: React.FC<ItemsLoadingProps> = ({}) => {
  return (
    <LoadingContainer>
      <Loading />
    </LoadingContainer>
  );
};

export default ItemsLoading;

const LoadingContainer = styled.View`
  ${({theme}) => css`
    width: 100%;
    align-items: center;
    justify-content: center;
    height: ${theme.responsivePxWidth(70)};
  `}
`;

const Loading = styled(ActivityIndicator).attrs(({theme}) => ({
  color: theme.colors.primaryDark,
  size: 'large',
}))``;
