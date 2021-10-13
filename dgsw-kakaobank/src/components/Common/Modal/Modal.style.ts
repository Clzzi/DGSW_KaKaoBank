import styled from '@emotion/styled';
import { ColorPalette } from 'styles/ColorPalette';
import { fontPalette } from 'styles/FontPalette';

export const StyledModal = styled.div`
  width: 400px;
  border-radius: 10px;
  min-height: 260px;
  display: flex;
  flex-direction: column;
`;

export const StyledContent = styled.div`
  padding: 46px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 200px;
  background-color: ${ColorPalette.fureWhite};
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  .title {
    word-break: keep-all;
    margin-bottom: 18px;
    font-family: 'AppleB';
    font-size: ${fontPalette.font28};
  }
  .content {
    width: 308px;
    height: auto;
    word-break: keep-all;
    font-family: 'AppleB';
    font-size: ${fontPalette.font24};
  }
`;

export const StyledButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: none;
  margin: auto 0 0 auto;
  .no {
    cursor: pointer;
    border: none;
    width: 200px;
    height: 60px;
    border-bottom-left-radius: 10px;
    background-color: ${ColorPalette.darkGrey};
    font-size: ${fontPalette.font24};
  }
  .yes {
    cursor: pointer;
    border: none;
    width: 200px;
    height: 60px;
    border-bottom-right-radius: 10px;
    font-family: 'AppleB';
    background-color: ${ColorPalette.main};
    font-size: ${fontPalette.font24};
  }
`;

export const StyledBackground = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  text-align: center;
  background-color: ${ColorPalette.darkGrey}95;
`;
