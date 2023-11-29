import {theme as appTheme} from '@shared/theme';
import React from 'react';
import {StyleProp, TextProps, TextStyle} from 'react-native';
import styled, {css} from 'styled-components/native';

type TypographyVariant = keyof typeof appTheme.fonts.typography;

interface TypographyProps extends TextProps {
  style?: StyleProp<TextStyle>;
  variant?: TypographyVariant;
}

export const Typography: React.FC<TypographyProps> = ({
  children,
  style,
  variant = 'body',
  ...rest
}) => {
  return (
    <Text style={style} $variant={variant} {...rest}>
      {children}
    </Text>
  );
};

export default Typography;

const Text = styled.Text<{$variant: TypographyVariant}>`
  ${({theme, $variant}) => css(theme.fonts.typography[$variant])}
`;
