import styled, {css} from 'styled-components/native';
import FastImage from 'react-native-fast-image';

export const Container = styled.View`
  ${({theme}) => css`
    border: 1px solid ${theme.colors.primaryDark};
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    min-height: ${theme.responsivePxWidth(70)};
    padding-left: ${theme.responsivePxWidth(80)};
  `}
`;
export const AvatarContainer = styled.View`
  ${({theme}) => css`
    position: absolute;
    width: ${theme.responsivePxWidth(70)};
    height: ${theme.responsivePxWidth(70)};
    top: 0;
    left: 0;
    align-items: center;
    justify-content: center;
  `}
`;
export const Avatar = styled(FastImage)`
  ${({theme}) => css`
    width: ${theme.responsivePxWidth(60)};
    height: ${theme.responsivePxWidth(60)};
    border-radius: 5px;
    overflow: hidden;
  `}
`;
