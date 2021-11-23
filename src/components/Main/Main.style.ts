import styled from '@emotion/styled';
import { ColorPalette } from 'styles/ColorPalette';
import { fontPalette } from 'styles/FontPalette';

export const StyledMainTitle = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  margin-bottom: 45px;

  & > span {
    font-family: 'AppleB';
    font-size: ${fontPalette.font24};
    color: ${(props) => props.theme.fontColor}
  }
  & > button {
    cursor: pointer;
    font-family: 'AppleB';
    width: 145px;
    height: 45px;
    border: none;
    border-radius: 10px;
    display: inline-flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    font-size: ${fontPalette.font20};
    background-color: ${ColorPalette.main};
    color: ${ColorPalette.fureBlack};
    box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.25);
  }
`;

export const StyledButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  margin-bottom: 16px;
`;
