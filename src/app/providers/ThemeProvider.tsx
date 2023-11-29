import {theme} from '@shared/theme';
import React, {PropsWithChildren} from 'react';
import {ThemeProvider as Theme} from 'styled-components';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {DISPLAY_HEIGHT, DISPLAY_WIDTH} from '@shared/constants';

const addPrefixPx = (func: (n: number) => number) => (args: number) =>
  func(args) + 'px';

const calcResponsivePx =
  (func: (n: number) => number, display: number = DISPLAY_WIDTH) =>
  (p: number, unit: string = 'px') =>
    `${func((p / display) * 100)}${unit}`;
const calcResponsive =
  (func: (n: number) => number, display: number = DISPLAY_WIDTH) =>
  (p: number) =>
    func((p / display) * 100);

export const ThemeProvider: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <Theme
      theme={{
        ...theme,
        responsiveFontSize: addPrefixPx(responsiveFontSize),
        responsiveHeight: calcResponsive(responsiveHeight),
        responsiveWidth: calcResponsive(responsiveWidth),
        responsivePxFontSize: calcResponsivePx(responsiveFontSize),
        responsivePxWidth: calcResponsivePx(responsiveWidth),
        responsivePxHeight: calcResponsivePx(responsiveHeight, DISPLAY_HEIGHT),
      }}>
      {children}
    </Theme>
  );
};

export default ThemeProvider;
