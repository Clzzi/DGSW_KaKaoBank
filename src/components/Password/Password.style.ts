import styled from '@emotion/styled';
import { fontPalette } from 'styles/FontPalette';

export const StyledTitle = styled.div`
  font-family: 'AppleB';
  font-size: ${fontPalette.font28};
  color:  ${(props) => props.theme.fontColor};
  text-align: start;
  margin-bottom: 70px;
`;
