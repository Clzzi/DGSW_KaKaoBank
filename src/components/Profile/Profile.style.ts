import styled from '@emotion/styled';
import { ColorPalette } from 'styles/ColorPalette';
import { fontPalette } from 'styles/FontPalette';

export const StyledTitle = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  margin-bottom: 42px;
  & > div {
    font-family: 'AppleEB';
    font-size: ${fontPalette.font24};
    color:  ${(props) => props.theme.fontColor}
  }
  & > button {
    font-family: 'AppleB';
    width: 100px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: ${ColorPalette.fureBlack};
    font-size: ${fontPalette.font16};
    background-color: ${ColorPalette.main};
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }
`;

export const StyledContentWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledContent = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 20px;
  .property {
    padding-left: 24px;
    font-family: 'AppleB';
    font-size: ${fontPalette.font20};
    color:  ${(props) => props.theme.fontColor};
  }
  .content {
    position: absolute;
    padding-left: 145px;
    font-family: 'AppleB';
    font-size: ${fontPalette.font20};
    color:  ${(props) => props.theme.fontColor};
  }
`;
