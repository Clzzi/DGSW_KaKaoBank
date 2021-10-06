import '@emotion/react';
import { IColorTheme, IFontTheme } from 'types/theme/theme.type';

declare module '@emotion/react' {
  export interface Theme {
    fontColor: string;
    backgroundColor: string;
  }
}
