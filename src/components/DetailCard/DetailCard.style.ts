import styled from '@emotion/styled';
import { ColorPalette } from 'styles/ColorPalette';
import { fontPalette } from 'styles/FontPalette';

export const StyledTopBackground = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 446px;
  background-color: ${ColorPalette.skyBlue};
  z-index: 0;
`;

export const StyledTopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  height: 446px;
`;

export const StyledTitle = styled.div`
  display: flex;
  margin-top: 16px;
  flex-direction: column;

  .company {
    z-index: 9;
    font-family: 'AppleB';
    font-size: ${fontPalette.font24};
    color: ${ColorPalette.fureWhite};
    margin-bottom: 7px;
  }
  .number {
    z-index: 9;
    font-family: 'AppleB';
    font-size: ${fontPalette.font24};
    color: ${ColorPalette.fureWhite};
    text-decoration-line: underline;
    text-underline-offset: 2px;
    cursor: pointer;
  }
`;

export const StyledMoney = styled.div`
  z-index: 9;
  font-family: 'AppleEB';
  font-size: ${fontPalette.font48};
  color: ${ColorPalette.fureWhite};
  font-weight: bold;
  .won {
    z-index: 9;
    font-family: 'AppleB';
    font-size: ${fontPalette.font40};
    color: ${ColorPalette.fureWhite};
  }
`;

export const StyledButton = styled.div`
  z-index: 9;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  margin-bottom: 31px;
  width: 100%;
`;
