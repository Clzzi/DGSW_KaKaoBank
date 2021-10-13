import styled from '@emotion/styled';
import { ColorPalette } from 'styles/ColorPalette';
import { fontPalette } from 'styles/FontPalette';

interface IBankProps {
  check: boolean;
}

export const StyledTitle = styled.div`
  font-size: ${fontPalette.font20};
  color: ${ColorPalette.fureBlack};
  text-align: start;
`;

export const StlyedBankWrapper = styled.div`
  width: 100%;
  min-height: 230px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 45px;
`;

export const StyledBank = styled.div<IBankProps>`
  cursor: pointer;
  width: 190px;
  height: 80px;
  font-size: ${fontPalette.font24};
  font-family: 'AppleEB';
  background-color: ${ColorPalette.skyBlue};
  color: ${ColorPalette.fureWhite};
  border-radius: 10px;
  border: none;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  position: relative;
  .background {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: ${ColorPalette.darkGrey}95;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    border: none;
    border-radius: 10px;
    opacity: ${(props) => (props.check ? 1 : 0)};
    transition: 0.4s ease-in-out;
  }
`;
