import styled from '@emotion/styled';
import { ColorPalette } from 'styles/ColorPalette';
import { fontPalette } from 'styles/FontPalette';

export const StyledAddCard = styled.div`
  width: 100%;
  height: 50px;
  font-size: ${fontPalette.font40};
  color: ${ColorPalette.darkGrey};
  cursor: pointer;
  background-color: ${ColorPalette.grey};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 10px;
`;
