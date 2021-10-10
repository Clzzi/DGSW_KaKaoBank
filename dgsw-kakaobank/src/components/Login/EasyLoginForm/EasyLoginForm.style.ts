import styled from '@emotion/styled';
import { ColorPalette } from 'styles/ColorPalette';
import { fontPalette } from 'styles/FontPalette';

export const StyledEasyLoginForm = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 174px;
  min-height: 160px;
  .title {
    font-family: 'AppleM';
    font-size: ${fontPalette.font28};
    margin-bottom: 14px;
  }
  .error {
    &::before {
      content: '*';
    }
    margin-top: 8px;
    font-family: 'AppleB';
    font-size: ${fontPalette.font14};
    color: ${ColorPalette.highlightRed};
  }
`;
