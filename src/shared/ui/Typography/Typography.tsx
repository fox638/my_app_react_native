import {theme as appTheme} from '@shared/theme';
import React from 'react';
import {StyleProp, TextProps, TextStyle} from 'react-native';
import styled, {css} from 'styled-components/native';

type TypographyVariant = keyof typeof appTheme.fonts.typography;
type Colors = keyof typeof appTheme.colors;
interface TypographyProps extends TextProps {
  style?: StyleProp<TextStyle>;
  variant?: TypographyVariant;
  color?: Colors;
}

export const Typography: React.FC<TypographyProps> = ({
  children,
  style,
  variant = 'body',
  color = 'primaryDark',
  ...rest
}) => {
  return (
    <Text style={style} $variant={variant} $color={color} {...rest}>
      {children}
    </Text>
  );
};

export default Typography;

const Text = styled.Text<{$variant: TypographyVariant; $color: Colors}>`
  ${({theme, $variant}) => css(theme.fonts.typography[$variant])}
  ${({theme, $color}) => css`
    color: ${theme.colors[$color]};
  `}
`;
