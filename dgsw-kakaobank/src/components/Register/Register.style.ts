import styled from '@emotion/styled';
import { ColorPalette } from 'styles/ColorPalette';
import { fontPalette } from 'styles/FontPalette';

export const StyledTitle = styled.div`
  font-family: 'AppleB';
  font-size: ${fontPalette.font40};
  text-align: start;
  margin-top: 12px;
  margin-bottom: 30px;
`;

export const StyledEasyPwTitle = styled.div`
  font-family: 'AppleB';
  font-size: ${fontPalette.font24};
  margin-bottom: 15px;
  text-align: start;
`;

export const StyledEasyPwError = styled.div`
  font-family: 'AppleB';
  font-size: ${fontPalette.font14};
  color: ${ColorPalette.highlightRed};
  text-align: start;
  &::before {
    content: '*';
    color: ${ColorPalette.highlightRed};
  }
`;

export const StyledEasyPw = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 150px;
`;

