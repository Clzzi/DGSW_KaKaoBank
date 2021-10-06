import styled from '@emotion/styled';
import { ColorPalette } from 'styles/ColorPalette';

export const StyledFooter = styled.div`
  width: 100vw;
  height: 60px;
  padding: 0px 700px;
  margin-top: 24px;
  background-color: ${ColorPalette.grey};
  display: flex;
  text-align: center;
  justify-content: space-between;
  align-items: center;
  .buttonWrapper {
    display: flex;
    text-align: center;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 14px 45.5px;
  }
`;
