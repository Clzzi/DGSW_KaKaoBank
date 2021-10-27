import styled from '@emotion/styled';
import { fontPalette } from 'styles/FontPalette';

export const StyledTitle = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  margin-bottom: 55px;
  & > div {
    font-family: 'AppleB';
    font-size: ${fontPalette.font28};
    color: ${(props) => props.theme.fontColor};
  }
`;
