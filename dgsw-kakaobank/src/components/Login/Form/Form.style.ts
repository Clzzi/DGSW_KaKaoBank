import styled from '@emotion/styled';
import { ColorPalette } from 'styles/ColorPalette';
import { fontPalette } from 'styles/FontPalette';

export const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 16px;
  min-height: 125px;
  .title {
    font-family: 'AppleB';
    font-size: ${fontPalette.font30};
    margin-bottom: 8px;
  }

  .error {
    font-family: 'AppleB';
    font-size: ${fontPalette.font14};
    color: ${ColorPalette.highlightRed};
    &::before {
      content: ' *';
      color: ${ColorPalette.highlightRed};
    }
  }
`;
