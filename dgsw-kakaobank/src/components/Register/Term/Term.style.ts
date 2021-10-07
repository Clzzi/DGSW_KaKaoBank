import styled from '@emotion/styled';
import { ColorPalette } from 'styles/ColorPalette';
import { fontPalette } from 'styles/FontPalette';

export const StyleTerm = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 50px;
`;

interface IButtonProps {
  check: boolean;
}

export const StyleTermButton = styled.div<IButtonProps>`
  cursor: pointer;
  border: none;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  background-color: ${(props) =>
    props.check ? ColorPalette.darkBlue : ColorPalette.darkGrey};

  border: ${(props) =>
    props.check ? `4px solid ${ColorPalette.darkGrey}` : `none`};
`;

export const StyleTermLink = styled.div`
  cursor: pointer;
  font-family: 'AppleB';
  font-size: ${fontPalette.font16};
  color: ${ColorPalette.darkBlue};
  text-decoration-line: underline;
  text-underline-offset: 6px;
`;
