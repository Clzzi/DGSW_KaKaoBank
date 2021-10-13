import styled from '@emotion/styled';
import { ColorPalette } from 'styles/ColorPalette';
import { fontPalette } from 'styles/FontPalette';

export const StyledTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 240px;
  margin-bottom: 70px;
  .title {
    margin-top: 30px;
    margin-bottom: 70px;
    border-bottom: 1px solid ${ColorPalette.fureBlack};
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
  .line {
    .property {
    }
    .content {
    }
  }
`;
