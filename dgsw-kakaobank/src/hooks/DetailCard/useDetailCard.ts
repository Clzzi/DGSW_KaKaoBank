import useLink from 'hooks/Common/useLink';
import useQueryString from 'hooks/Common/useQueryString';
import {
  handleGetAccountInfo,
  handleGetPushRecord,
  handleGetReceiveRecord,
} from 'lib/api/account/account.api';
import Toast from 'lib/Toast';
import { CSSProperties, useMemo, useState } from 'react';
import {
  IAccount,
  IPushRecord,
  IReceiveRecord,
} from 'types/account/account.type';

const useDetailCard = () => {
  const { number } = useQueryString();
  const { handleLink: pushBring } = useLink('/bring/getcard');
  const [pushRecord, setPushRecord] = useState<IPushRecord[]>([]);
  const [receiveRecord, setReceiveRecord] = useState<IReceiveRecord[]>([]);
  const [card, setCard] = useState<IAccount>({
    money: '',
    userPhone: '',
    accountId: '',
  });

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
      setPushRecord(data);
    } catch (e: any) {
      Toast.errorToast(e.response.data.message);
    }
  };

  const getReceiveRemittanceRecord = async () => {
    try {
      const req = { accountId: number as string };
      const { data } = await handleGetReceiveRecord(req);
      setReceiveRecord(data);
    } catch (e: any) {
      Toast.errorToast(e.response.data.message);
    }
  };

  const handleRecord = () => {
    
  }

  return {
    onClickBring,
    customBringButtonStyle,
    number,
    getAccountInfo,
    card,
    pushRecord,
  };
};

export default useDetailCard;
