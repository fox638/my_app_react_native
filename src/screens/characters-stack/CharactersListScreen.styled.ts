import styled, {css} from 'styled-components/native';

export const Container = styled.ScrollView`
  ${({theme}) => css`
    flex: 1;
    background-color: ${theme.colors.primaryLight};
    padding: ${theme.responsivePxWidth(10)};
  `}
`;
