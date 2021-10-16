import styled from '@emotion/styled';
import { ColorPalette } from 'styles/ColorPalette';
import { fontPalette } from 'styles/FontPalette';

export const StyledWelcome = styled.div``;

export const StyledTopBackground = styled.div`
  width: 100%;
  height: 582px;
  background-color: ${ColorPalette.main};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;
`;

export const StyledTopHeader = styled.div`
  width: 100vw;
  height: 72px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  .title {
    width: 430px;
    height: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    text-align: center;
    .mainTitle {
      z-index: 9;
      font-family: 'AppleEB';
      font-size: ${fontPalette.font20};
      color: ${ColorPalette.darkBlue};
    }
    .subTitle {
      z-index: 9;
      font-family: 'AppleEB';
      font-size: ${fontPalette.font14};
      font-weight: bold;
      color: ${ColorPalette.darkBlue};
    }
  }
`;

export const StyledTitle = styled.div`
  z-index: 9;
  font-family: 'AppleEB';
  display: inline-flex;
  flex-direction: column;
  width: 430px;
  height: fit-content;
  .subTitle {
    color: ${ColorPalette.darkBlue};
    z-index: 9;
    font-size: ${fontPalette.font40};
    font-weight: bold;
  }
  .mainTitle {
    z-index: 9;
    color: ${ColorPalette.darkBlue};
    font-size: ${fontPalette.font60};
    font-weight: bold;
    line-height: 60px;
  }
`;

export const StyledStartNow = styled.div`
  font-size: ${fontPalette.font48};
  font-family: 'AppleEB';
  display: flex;
  justify-content: center;
  text-align: center;
  color: ${ColorPalette.darkBlue};
  padding-bottom: 70px;
  .highlighting {
    height: 60px;
    width: 96px;
    font-family: 'AppleEB';
    color: ${ColorPalette.darkBlue};
    background-color: ${ColorPalette.main};
  }
`;

export const StyledButton = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
`;
