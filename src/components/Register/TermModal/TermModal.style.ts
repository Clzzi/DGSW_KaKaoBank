import styled from '@emotion/styled';
import { ColorPalette } from 'styles/ColorPalette';
import { fontPalette } from 'styles/FontPalette';

interface ITermModal {
  show: boolean;
}

export const StyledTermModal = styled.div<ITermModal>`
  position: fixed;
  display: ${(props) => (props.show ? 'block' : 'none')};
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${ColorPalette.grey};
  outline: 0;
`;

export const StyledTermModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const StyledTermModalContent = styled.div`
  width: 400px;
  height: 600px;
  overflow-y: scroll;
  background-color: ${ColorPalette.fureWhite};
  padding: 36px;
  border-radius: 6px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  .title {
    font-family: 'AppleEB';
    font-size: ${fontPalette.font40};
    margin-bottom: 12px;
  }
  .content {
    font-size: ${fontPalette.font20};
    word-break: keep-all;
    line-height: 30px;
  }
`;
