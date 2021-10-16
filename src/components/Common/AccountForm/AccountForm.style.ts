import styled from '@emotion/styled';
import { ColorPalette } from 'styles/ColorPalette';
import { fontPalette } from 'styles/FontPalette';

export const StyledTitle = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  margin-bottom: 2px;
  margin-top: 29px;
  .title {
    font-size: ${fontPalette.font20};
    color: ${ColorPalette.fureBlack};
  }
  .balance {
    font-family: 'AppleB';
    font-size: ${fontPalette.font18};
    color: ${ColorPalette.darkGrey};
    .title {
      font-family: 'AppleB';
      font-size: ${fontPalette.font18};
      color: ${ColorPalette.darkGrey};
    }
    .won {
      font-family: 'AppleB';
      font-size: ${fontPalette.font18};
      color: ${ColorPalette.darkGrey};
    }
  }
`;

export const StyledKorean = styled.div`
  text-align: end;
  font-family: 'AppleB';
  font-size: ${fontPalette.font24};
  color: ${ColorPalette.darkBlue};
  margin-bottom: 2px;
`;

export const StlyedError = styled.div`
  &::before {
    content: '*';
    color: ${ColorPalette.highlightRed};
    font-size: ${fontPalette.font14};
  }
  text-align: start;
  margin-top: 8px;
  font-family: 'AppleB';
  font-size: ${fontPalette.font14};
  color: ${ColorPalette.highlightRed};
`;
