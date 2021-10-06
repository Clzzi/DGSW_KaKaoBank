import styled from '@emotion/styled';
import { ColorPalette } from 'styles/ColorPalette';
import { fontPalette } from 'styles/FontPalette';

export const StyledInfoInput = styled.input`
  width: 430px;
  height: 41px;
  background-color: ${ColorPalette.grey};
  color: ${(props) => props.theme.fontColor || ColorPalette.fureBlack};
  font-size: ${fontPalette.font16};
  border-radius: 10px;
  padding: 10px 16px;
  justify-content: center;
  text-align: start;
  margin: 0;
  border: none;
  &::placeholder {
    color: ${ColorPalette.darkGrey};
  }
`;
