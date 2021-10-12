import styled from '@emotion/styled';
import { ColorPalette } from 'styles/ColorPalette';
import { fontPalette } from 'styles/FontPalette';

export const StyledTitle = styled.div`
  text-align: start;
  margin-bottom: 45px;
  & > div {
    font-family: 'AppleB';
    font-size: ${fontPalette.font28};
    color: ${ColorPalette.fureBlack};
  }
`;
