import styled from '@emotion/styled';
import { ColorPalette } from 'styles/ColorPalette';
import { fontPalette } from 'styles/FontPalette';

export const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 174px;
  min-height: 160px;
  .title {
    text-align: start;
    font-family: 'AppleB';
    font-size: ${fontPalette.font24};
    color: ${(props) => props.theme.fontColor};
    margin-bottom: 16px;
  }

  .error {
    text-align: start;
    &::before {
      content: '*';
    }
    margin-top: 8px;
    font-family: 'AppleB';
    font-size: ${fontPalette.font14};
    color: ${ColorPalette.highlightRed};
  }
`;
