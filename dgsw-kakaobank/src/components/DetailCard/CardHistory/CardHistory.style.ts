import styled from '@emotion/styled';
import { ColorPalette } from 'styles/ColorPalette';
import { fontPalette } from 'styles/FontPalette';

export const StyledCardHistory = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  padding: 16px;
  border-bottom: solid 1.5px ${ColorPalette.grey};
`;

export const StyledMoney = styled.div`
  display: flex;
  flex-direction: column;
  text-align: end;
  .money {
    font-family: 'AppleB';
    font-size: ${fontPalette.font20};
    color: ${ColorPalette.fureBlack};
    font-weight: bold;
    .won {
      font-family: 'AppleB';
      font-size: ${fontPalette.font18};
      color: ${ColorPalette.fureBlack};
    }
  }
  .balance {
    font-family: 'AppleB';
    font-size: ${fontPalette.font16};
    color: ${ColorPalette.darkGrey};
    .won {
      font-family: 'AppleB';
      font-size: ${fontPalette.font14};
      color: ${ColorPalette.darkGrey};
    }
  }
`;

export const StyledInfo = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 4px;
  .date {
    font-family: 'AppleB';
    font-size: ${fontPalette.font16};
    color: ${ColorPalette.darkGrey};
    margin-right: 20px;
  }
  .name {
    font-size: ${fontPalette.font16};
    color: ${ColorPalette.fureBlack};
  }
`;

export const StyledHistoryOption = styled.div`
  color: ${ColorPalette.darkBlue};
  margin: 16px 0px;
  font-weight: bold;
  text-align: end;
  padding-right: 16px;
  cursor: pointer;
`;

export const StyledCardHistoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-top: solid 2px ${ColorPalette.darkGrey};
  overflow-y: scroll;
  max-height: calc(100vh - 580px);
`;
