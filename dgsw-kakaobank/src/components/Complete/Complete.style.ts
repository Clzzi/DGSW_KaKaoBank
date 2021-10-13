import styled from '@emotion/styled';
import { ColorPalette } from 'styles/ColorPalette';

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
