import styled from '@emotion/styled';
import { ColorPalette } from 'styles/ColorPalette';
import { fontPalette } from 'styles/FontPalette';

export const StyledTitle = styled.div`
  font-family: 'AppleB';
  font-size: ${fontPalette.font28};
  color: ${ColorPalette.fureBlack};
  text-align: start;
  margin-bottom: 45px;
`;

export const StyledButton = styled.div`
  position: fixed;
  width: 100vw;
  bottom: 0px;
  left: 0px;
  height: 50px;
  line-height: 50px;
  cursor: pointer;
  background-color: ${ColorPalette.main};
  color: ${ColorPalette.fureBlack};
  display: flex;
  justify-content: center;
  align-content: center;
  text-align: center;
  font-family: 'AppleEB';
  font-size: ${fontPalette.font24};
`;
