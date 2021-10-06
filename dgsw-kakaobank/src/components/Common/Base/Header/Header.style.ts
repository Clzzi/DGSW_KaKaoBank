import styled from '@emotion/styled';
import { ColorPalette } from 'styles/ColorPalette';
import { fontPalette } from 'styles/FontPalette';

export const StyleHeader = styled.div`
  width: 100vw;
  height: 72px;
  padding: 21px 745px;
  display: flex;
  text-align: center;
  background-color: ${ColorPalette.main};
  justify-content: space-between;
  margin-bottom: 45px;
  .title {
    background: none;
    .mainTitle {
      display: inline-block;
      background: none;
      color: ${ColorPalette.darkBlue};
      font-size: ${fontPalette.font20};
      font-family: AppleEB;
      font-weight: bold;
    }
    .subTitle {
      display: inline-block;
      background: none;
      color: ${ColorPalette.darkBlue};
      font-size: ${fontPalette.font14};
      font-family: AppleB;
      font-weight: bold;
    }
  }
`;
