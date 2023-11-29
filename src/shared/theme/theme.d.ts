import 'styled-components';
import {theme} from './theme';

type MyTheme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends MyTheme {
    responsiveHeight: (h: number) => number;
    responsiveWidth: (f: number) => number;
    responsiveFontSize: (f: number) => string;
    responsivePxFontSize: (f: number, unit?: string) => string;
    responsivePxWidth: (f: number, unit?: string) => string;
    responsivePxHeight: (f: number, unit?: string) => string;
  }
}
