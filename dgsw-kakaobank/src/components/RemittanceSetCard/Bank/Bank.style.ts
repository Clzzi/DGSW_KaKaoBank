import styled from '@emotion/styled';
import { ColorPalette } from 'styles/ColorPalette';
import { fontPalette } from 'styles/FontPalette';

export const StyledTitle = styled.div`
  font-size: ${fontPalette.font20};
  color: ${ColorPalette.fureBlack};
  text-align: start;
`;

export const StlyedBankWrapper = styled.div`
  width: 100%;
  min-height: 230px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const StyledBank = styled.div`
  cursor: pointer;
  width: 190px;
  height: 80px;
  font-size: ${fontPalette.font24};
  font-family: 'AppleEB';
  background-color: ${ColorPalette.skyBlue};
  color: ${ColorPalette.fureWhite};
  border-radius: 10px;
  border: none;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

export const StyledWrapper = styled.div``;
