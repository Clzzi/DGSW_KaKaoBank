import styled from '@emotion/styled';
import { ColorPalette } from 'styles/ColorPalette';
import { fontPalette } from 'styles/FontPalette';

export const StyledTitle = styled.div`
  font-family: 'AppleB';
  font-size: ${fontPalette.font28};
  color: ${ColorPalette.fureBlack};
  text-align: start;
  margin-bottom: 70px;
`;

export const StyledWrapper = styled.div`
  min-height: 325px;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: start;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${ColorPalette.fureBlack};
  .line {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: center;
    align-items: center;
    margin-bottom: 36px;
    &:last-child {
      margin-bottom: 85px;
    }
    .property {
      font-size: ${fontPalette.font24};
      color: ${ColorPalette.darkGrey};
    }
    .content {
      font-weight: bold;
      font-family: 'AppleB';
      font-size: ${fontPalette.font24};
      color: ${ColorPalette.fureBlack};
    }
  }
`;

export const StyledButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 85px;
  .no {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 60px;
    background-color: ${ColorPalette.darkGrey};
    color: ${ColorPalette.fureBlack};
    font-size: ${fontPalette.font24};
  }
  .yes {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 60px;
    font-family: 'AppleB';
    background-color: ${ColorPalette.main};
    color: ${ColorPalette.fureBlack};
    font-size: ${fontPalette.font24};
  }
`;
