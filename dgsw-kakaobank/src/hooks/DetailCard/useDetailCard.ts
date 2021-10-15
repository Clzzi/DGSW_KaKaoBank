import useLink from 'hooks/Common/useLink';
import useQueryString from 'hooks/Common/useQueryString';
import {
  handleGetAccountInfo,
  handleGetPushRecord,
  handleGetReceiveRecord,
} from 'lib/api/account/account.api';
import Toast from 'lib/Toast';
import { CSSProperties, useEffect, useMemo } from 'react';
import { useRecoilState } from 'recoil';
import {
  detailCardInfoState,
  detailCardOptionState,
  detailCardRecordState,
  pushRecordState,
  receiveRecordState,
} from 'store/account';
import {
  IPushRecord,
  IReceiveRecord,
  IRecord,
} from 'types/account/account.type';
import { UOption } from 'types/common/common.type';
import makeAccountNumber from 'util/makeAccountNumber';
import makeDate from 'util/makeDate';
import makeMoneyComma from 'util/makeMoneyComma';

const useDetailCard = () => {
  const { number } = useQueryString();
  const { handleLink: pushBring } = useLink('/bring/getcard');
  const [pushRecord, setPushRecord] = useRecoilState(pushRecordState);
  const [receiveRecord, setReceiveRecord] = useRecoilState(receiveRecordState);
  const [record, setRecord] = useRecoilState(detailCardRecordState);
  const [option, setOption] = useRecoilState(detailCardOptionState);
  const [card, setCard] = useRecoilState(detailCardInfoState);

  useEffect(() => {
    console.log(record);
  }, [record]);

  const customBringButtonStyle: CSSProperties = useMemo(() => {
    return {
      width: '100%',
      height: '60px',
      zIndex: 9,
      marginBottom: '16px',
    };
  }, []);

  const getAccountInfo = async () => {
    try {
      const { data } = await handleGetAccountInfo(number as string);
      setCard(data);
    } catch (e: any) {
      Toast.errorToast(e.response.data.message);
    }
  };

  const onClickBring = () => {
    sessionStorage.setItem('Bring', 'getCard');
    pushBring();
  };

  const getPushRemittanceRecord = async () => {
    try {
      const req = { accountId: number as string };
      const { data } = await handleGetPushRecord(req);
      return data;
    } catch (e: any) {
      Toast.errorToast(e.response.data.message);
    }
  };

  const getReceiveRemittanceRecord = async () => {
    try {
      const req = { accountId: number as string };
      const { data } = await handleGetReceiveRecord(req);
      return data;
    } catch (e: any) {
      Toast.errorToast(e.response.data.message);
    }
  };

  const handleRecord = ({push, receive}:{push:IPushRecord, receive:IReceiveRecord}) => {
    const recordArr: IRecord[] = [];

    pushRecord &&
      pushRecord.forEach((record: IPushRecord) => {
        recordArr.push({
          account: makeAccountNumber(record.reciverId),
          money: makeMoneyComma(record.money),
          type: 'push',
          date: makeDate(record.createdAt),
        });
      });

    receiveRecord &&
      receiveRecord.forEach((record: IReceiveRecord) => {
        recordArr.push({
          account: makeAccountNumber(record.senderId),
          money: makeMoneyComma(record.money),
          type: 'receive',
          date: record.createdAt,
        });
      });

    setRecord(recordArr);
  };

  const loadRecord = async () => {
    const push = await getPushRemittanceRecord();
    const receive = await getReceiveRemittanceRecord();
    handleRecord({push, receive});
  };

  const setRecordNewest = () => {
    record &&
      setRecord(
        record.sort((a, b) => {
          if (a.date < b.date) {
            return -1;
          } else if (a.date > b.date) {
            return 1;
          } else {
            return 0;
          }
        }),
      );
  };

  const setRecordOldest = () => {
    record &&
      setRecord(
        record.sort((a, b) => {
          if (a.date > b.date) {
            return -1;
          } else if (a.date < b.date) {
            return 1;
          } else {
            return 0;
          }
        }),
      );
  };

  const onClickOption = () => {
    if (option === '최신순') {
      setOption('과거순');
      onChangeOption('과거순');
    } else {
      setOption('최신순');
      onChangeOption('최신순');
    }
  };

  const onChangeOption = (option: UOption) => {
    if (option === '과거순') {
      setRecordOldest();
    } else {
      setRecordNewest();
    }
  };

  return {
    onClickBring,
    customBringButtonStyle,
    number,
    getAccountInfo,
    onClickOption,
    onChangeOption,
    option,
    loadRecord,
    card,
    record,
  };
};

export default useDetailCard;
