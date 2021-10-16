import styled from '@emotion/styled';
import { ColorPalette } from 'styles/ColorPalette';
import { fontPalette } from 'styles/FontPalette';

export const StyledTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 240px;
  margin-bottom: 70px;
  border-bottom: 1px solid ${ColorPalette.fureBlack};
  .title {
    font-family: 'AppleEB';
    font-size: ${fontPalette.font28};
    color: ${ColorPalette.fureBlack};
    margin-top: 30px;
    margin-bottom: 70px;
  }
`;

export const StyledButton = styled.div`
  position: fixed;
  width: 100vw;
  bottom: 0px;
  left: 0px;
  height: 50px;
  line-height: 50px;
  cursor: pointer;
  background-color: ${ColorPalette.main};
  color: ${ColorPalette.fureBlack};
  display: flex;
  justify-content: center;
  align-content: center;
  text-align: center;
  font-family: 'AppleEB';
  font-size: ${fontPalette.font24};
`;

export const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  .line {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: center;
    align-items: center;
    padding: 0px 10px;
    margin-bottom: 36px;
    .property {
      font-size: ${fontPalette.font24};
      color: ${ColorPalette.darkGrey};
    }
    .content {
      font-family: 'AppleB';
      font-size: ${fontPalette.font24};
      color: ${ColorPalette.fureBlack};
    }
  }
`;
