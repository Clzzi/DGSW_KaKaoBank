import styled from '@emotion/styled';
import { ColorPalette } from 'styles/ColorPalette';
import { fontPalette } from 'styles/FontPalette';
import { URecord } from 'types/common/common.type';

interface IMoneyProps {
  type: URecord;
}

export const StyledCardHistory = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  padding: 16px;
  border-bottom: solid 1.5px ${ColorPalette.grey};
`;

export const StyledMoney = styled.div<IMoneyProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: end;
  align-items: center;
  font-family: 'AppleB';
  font-size: ${fontPalette.font24};
  color: ${(props) =>
    props.type === 'push' ? props.theme.fontColor : ColorPalette.darkBlue};
  font-weight: bold;
  .won {
    font-family: 'AppleB';
    font-size: ${fontPalette.font24};
    color: ${(props) =>
      props.type === 'push' ? props.theme.fontColor : ColorPalette.darkBlue};
    margin-left: 4px;
    font-weight: normal;
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
  .account {
    font-size: ${fontPalette.font16};
    color: ${(props) => props.theme.fontColor};
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
