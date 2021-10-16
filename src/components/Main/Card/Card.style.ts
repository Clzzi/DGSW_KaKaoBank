import styled from '@emotion/styled';
import { ColorPalette } from 'styles/ColorPalette';
import { fontPalette } from 'styles/FontPalette';

export const StyledCard = styled.div`
  width: 100%;
  height: 154px;
  padding: 16px;
  background-color: ${ColorPalette.skyBlue};
  border-radius: 10px;
  box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.25);
  margin-bottom: 27px;
  cursor: pointer;
  .title {
    display: flex;
    flex-direction: column;
    text-align: start;
    .company {
      font-family: 'AppleB';
      font-size: ${fontPalette.font20};
      color: ${ColorPalette.fureWhite};
    }
    .number {
      font-family: 'AppleB';
      font-size: ${fontPalette.font14};
      color: ${ColorPalette.fureWhite};
    }
  }
  .money {
    font-family: 'AppleEB';
    font-size: ${fontPalette.font28};
    color: ${ColorPalette.fureWhite};
    font-weight: bold;
  }

  .won {
    font-family: 'AppleB';
    font-size: ${fontPalette.font28};
    color: ${ColorPalette.fureWhite};
  }
`;
