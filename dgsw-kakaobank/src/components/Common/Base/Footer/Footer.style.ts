import styled from '@emotion/styled';
import { ColorPalette } from 'styles/ColorPalette';

export const StyledFooter = styled.div`
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 60px;
  margin-top: 24px;
  background-color: ${ColorPalette.grey};
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  .buttonWrapper {
    display: flex;
    text-align: center;
    justify-content: space-between;
    align-items: center;
    width: 520px;
    padding: 14px 45px;
  }
`;
