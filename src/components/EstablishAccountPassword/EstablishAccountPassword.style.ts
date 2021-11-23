import styled from '@emotion/styled';
import { fontPalette } from 'styles/FontPalette';

export const StyledTitle = styled.div`
  text-align: start;
  margin-bottom: 60px;
  font-family: 'AppleB';
  font-size: ${fontPalette.font28};
  color: ${(props) => props.theme.fontColor};
`;

export const StyledAccountNameTitle = styled.div`
  text-align: center;
  margin-bottom: 12px;
  font-family: 'AppleB';
  font-size: ${fontPalette.font24};
  color: ${(props) => props.theme.fontColor};
`;
