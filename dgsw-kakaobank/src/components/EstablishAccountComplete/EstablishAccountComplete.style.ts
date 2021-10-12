import styled from '@emotion/styled';
import { ColorPalette } from 'styles/ColorPalette';
import { fontPalette } from 'styles/FontPalette';

export const StyledTitle = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1.5px solid ${ColorPalette.fureBlack};
  text-align: start;
  margin-bottom: 45px;
  .title {
    font-family: 'AppleB';
    font-size: ${fontPalette.font48};
    color: ${ColorPalette.fureBlack};
  }
  .subTitle {
    font-family: 'AppleB';
    font-size: ${fontPalette.font24};
    color: ${ColorPalette.darkGrey};
    margin-bottom: 12px;
  }
`;

export const StyledContent = styled.div`
  text-align: start;
  margin-bottom: 8px;
  .property {
    font-family: 'AppleB';
    font-size: ${fontPalette.font24};
    color: ${ColorPalette.darkBlue};
  }
  .content {
    font-family: 'AppleB';
    font-size: ${fontPalette.font24};
    color: ${ColorPalette.fureBlack};
  }
  &:nth-child(3) {
    margin-bottom: 190px;
  }
`;
