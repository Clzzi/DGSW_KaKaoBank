import styled from '@emotion/styled';
import { ColorPalette } from 'styles/ColorPalette';
import { fontPalette } from 'styles/FontPalette';

export const StyledCard = styled.div`
  background-color: ${ColorPalette.skyBlue};
  border: none;
  border-radius: 10px;
  margin-bottom: 20px;
  padding: 16px;
  width: 100%;
  height: 154px;
  .info {
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
    .won {
      font-family: 'AppleB';
      font-size: ${fontPalette.font24};
      color: ${ColorPalette.fureWhite};
      font-weight: normal;
    }
  }
`;
