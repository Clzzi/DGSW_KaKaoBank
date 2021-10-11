import styled from '@emotion/styled';
import { ColorPalette } from 'styles/ColorPalette';
import { fontPalette } from 'styles/FontPalette';

export const StyledTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin-bottom: 50px;
  & > div {
    font-family: 'AppleB';
    font-size: ${fontPalette.font40};
  }

  & > button {
    font-family: 'AppleB';
    cursor: pointer;
    width: 120px;
    height: 38px;
    color: ${ColorPalette.fureWhite};
    background-color: ${ColorPalette.darkBlue};
    font-size: ${fontPalette.font18};
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

export const StyledLoginForm = styled.div`
  margin-bottom: 67px;
`;
