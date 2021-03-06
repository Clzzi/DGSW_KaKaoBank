import styled from '@emotion/styled';
import { ColorPalette } from 'styles/ColorPalette';
import { fontPalette } from 'styles/FontPalette';

interface IButtonProps {
  backgroundColor?: string;
  fontColor?: string;
}

export const StyledButton = styled.button<IButtonProps>`
  width: 430px;
  height: 50px;
  background-color: ${(props) =>
    props.backgroundColor || ColorPalette.darkBlue};
  color: ${(props) => props.fontColor || ColorPalette.fureWhite};
  font-size: ${fontPalette.font24};
  border-radius: 10px;
  cursor: pointer;
  padding: 9px;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin: 0;
  font-weight: bold;
  overflow: hidden;
  border: none;
`;
