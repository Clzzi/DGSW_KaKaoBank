import { ChangeEvent, CSSProperties, useMemo, useState } from 'react';
import Toast from 'lib/Toast';
import { fontPalette } from 'styles/FontPalette';
import useLink from 'hooks/Common/useLink';
import makeAccountNumber from 'util/makeAccountNumber';
import useQueryString from 'hooks/Common/useQueryString';
import { handleGetAccountInfo } from 'lib/api/account/account.api';
import { useHistory } from 'react-router';
import { History } from 'history';
import { removeHyphen } from 'util/removeHyphen';

const useRemittance = () => {
  const { number } = useQueryString();
  const history: History = useHistory();
  const [account, setAccount] = useState<string>('');
  const [money, setMoney] = useState<string>('1');
  const [accountError, setAccountError] = useState<string>('');
  const [moneyError, setMoneyError] = useState<string>('');
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [balance, setBalance] = useState<string>('0');
  const [modalInfo, setModalInfo] = useState<string>();

  const { handleLink: pushMain } = useLink('/main');

  const customTitleInputStyle: CSSProperties = useMemo(() => {
    return {
      fontFamily: 'AppleM',
      fontSize: '20px',
      marginBottom: '20px',
    };
  }, []);

  const customInputStyle: CSSProperties = useMemo(() => {
    return {
      width: '100%',
      height: '80px',
      fontSize: fontPalette.font28,
      padding: '20px',
    };
  }, []);

  const getAccountInfo = async () => {
    try {
      const { data } = await handleGetAccountInfo(number as string);
      setBalance(data.money);
    } catch (e: any) {
      Toast.errorToast(e.response.data.message);
    }
  };

  const checkStorage = () => {
    if (sessionStorage.getItem('Remittance') !== 'setCard') {
      Toast.errorToast('비정삭적인 접근입니다');
      pushMain();
    }
  };

  const onChangeMoney = (e: ChangeEvent<HTMLInputElement>) => {
    setMoney(e.target.value.replace(/[^0-9]/g, ''));
    checkMoneyError(e.target.value.replace(/[^0-9]/g, ''));
  };

  const onChangeAccountNumber = (e: ChangeEvent<HTMLInputElement>) => {
    setAccount(makeAccountNumber(e.target.value));
    checkAccountError(makeAccountNumber(e.target.value));
  };

  const checkAccountError = (value: string) => {
    if (value.length < 14) {
      setAccountError('계좌번호를 제대로 작성해주세요');
    } else {
      setAccountError('');
    }
  };

  const checkMoneyError = (value: string) => {
    if (value.length <= 0 || parseInt(value) > parseInt(balance)) {
      setMoneyError('금액을 제대로 입력해주세요');
    } else {
      setMoneyError('');
    }
  };

  const getReceiveAccountInfo = async () => {
    try {
      const { data } = await handleGetAccountInfo(removeHyphen(account));
      setModalInfo(data.accountId);
      setOpenModal(true);
    } catch (e: any) {
      Toast.errorToast('등록되어있지 않은 계좌번호입니다.');
    }
  };

  const onClickNext = async () => {
    console.log(account.length);
    if (
      accountError !== '' ||
      moneyError !== '' ||
      account.length <= 0 ||
      money.length <= 0
    ) {
      Toast.errorToast('계좌번호 또는 금액을 제대로 입력해주세요');
      return;
    }
    if (removeHyphen(account) === number) {
      Toast.errorToast('자기자신에게는 송금할 수 없습니다.');
      return;
    }

    await getReceiveAccountInfo();
  };

  const onClickModalYes = () => {
    sessionStorage.setItem('Remittance', 'confirm');
    setOpenModal(false);
    history.push(
      `/remittance/confirm?push=${number}&receive=${modalInfo}&money=${money}`,
    );
  };

  return {
    getAccountInfo,
    onClickModalYes,
    openModal,
    setOpenModal,
    customInputStyle,
    balance,
    modalInfo,
    customTitleInputStyle,
    account,
    money,
    onClickNext,
    moneyError,
    onChangeAccountNumber,
    onChangeMoney,
    accountError,
    checkStorage,
  };
};

export default useRemittance;
