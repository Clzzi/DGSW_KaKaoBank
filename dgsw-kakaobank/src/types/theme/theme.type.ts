import styled, { CreateStyled } from '@emotion/styled';

export interface IColorTheme {
  main: string;
  toss: string;
  shinhan: string;
  darkBlue: string;
  skyBlue: string;
  skyPink: string;
  skyGreen: string;
  grey: string;
  darkGrey: string;
  backgroundWhite: string;
  fureGreen: string;
  fureWhite: string;
  fureBlack: string;
  fontColor: string;
  backgroundColor: string;
}

export interface IFontTheme {
  font14: string;
  font16: string;
  font18: string;
  font20: string;
  font22: string;
  font28: string;
  font36: string;
  font40: string;
  font48: string;
  font60: string;
}

export interface ITheme {
  color: IColorTheme,
  font: IFontTheme
}