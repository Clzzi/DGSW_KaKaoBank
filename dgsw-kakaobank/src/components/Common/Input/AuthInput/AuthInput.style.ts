import styled from '@emotion/styled';
import { ColorPalette } from 'styles/ColorPalette';
import { fontPalette } from 'styles/FontPalette';

export const StyledAuthInput = styled.input`
  width: 60px;
  height: 60px;
  border: none;
  border-radius: 10px;
  background-color: ${ColorPalette.grey};
  font-size: ${fontPalette.font36};
  line-height: 30px;
  font-weight: bold;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

export const StyleAuthContainer = styled.div`
  width: 430px;
  display: inline-flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
`;
