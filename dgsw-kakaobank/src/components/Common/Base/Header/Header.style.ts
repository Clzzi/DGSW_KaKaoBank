import styled from '@emotion/styled';
import { ColorPalette } from 'styles/ColorPalette';
import { fontPalette } from 'styles/FontPalette';

export const StyleHeader = styled.div`
  width: 100vw;
  height: 72px;
  display: flex;
  text-align: center;
  background-color: ${ColorPalette.main};
  justify-content: center;
  margin-bottom: 45px;
  align-items: center;

  .HeaderWrapper {
    width: 430px;
    display: flex;
    justify-content: space-between;
    text-align: center;
    align-items: center;
    .title {
      .mainTitle {
        display: inline-block;
        background: none;
        color: ${ColorPalette.darkBlue};
        font-size: ${fontPalette.font20};
        font-family: 'AppleEB';
        font-weight: bold;
      }
      .subTitle {
        display: inline-block;
        background: none;
        color: ${ColorPalette.darkBlue};
        font-size: ${fontPalette.font14};
        font-family: 'AppleEB';
        font-weight: bold;
      }
    }
  }
`;
