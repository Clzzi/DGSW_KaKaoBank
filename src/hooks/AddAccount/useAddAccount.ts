import useLink from 'hooks/Common/useLink';
import { handleGetMyAllAccount } from 'lib/api/account/account.api';
import Toast from 'lib/Toast';
import { ChangeEvent, CSSProperties, useMemo, useState } from 'react';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { myAccountIdState } from 'store/account';
import { phoneState, selectCardState, setCardState } from 'store/addAccount';
import { ColorPalette } from 'styles/ColorPalette';
import { IOtherAccount } from 'types/account/account.type';
import makePhoneNumber from 'util/makePhoneNumber';
import addAccountValidation from 'validation/addAccount.validation';

const useAddAccount = () => {
  const { handleLink: pushNext } = useLink('/add/card');
  const { handleLink: pushMain } = useLink('/main');
  const [phone, setPhone] = useRecoilState<string>(phoneState);
  const [phoneError, setPhoneError] = useState<string>('');
  const [card, setCard] = useRecoilState<IOtherAccount[]>(setCardState);
  const [selectCard, setSelectCard] = useRecoilState<string[]>(selectCardState);
  const accountId = useRecoilValue(myAccountIdState);

  const onResetPhone = () => {
    setPhone('');
    setPhoneError('');
  };

  const getMyAllAccount = async () => {
    try {
      // const { data } = await handleGetMyAllAccount();
      const test = [
        {
          accountId: '001089349966',
          phone: '01090882512',
          name: '손민재',
        },
      ];
      const unDuplicatedAccountId = getUnDuplicatedAccountId(test);
      setCard(unDuplicatedAccountId);
    } catch (e: any) {
      Toast.errorToast(e.response.data.message);
    }
  };

  const getUnDuplicatedAccountId = (accounts: IOtherAccount[]) => {
    let unDuplicatedAccountId: IOtherAccount[] = [];
    accounts.forEach((account) => {
      if (!accountId.includes(account.accountId)) {
        const info = {
          accountId: account.accountId,
          name: account.name,
          phone: account.phone,
        };
        unDuplicatedAccountId.push(info);
      }
    });
    return unDuplicatedAccountId;
  };

  const onChangePhone = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPhone(makePhoneNumber(e.target.value));
    checkPhone(e.target.value);
  };

  const customButtonStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: ColorPalette.main,
      color: ColorPalette.fureBlack,
      marginTop: '65px',
    };
  }, []);

  const checkPhone = (value: string) => {
    if (value.length < 13) {
      setPhoneError('전화번호를 제대로 입력해주세요');
    } else {
      setPhoneError('');
    }
  };

  const onClickFind = () => {
    if (addAccountValidation.checkEmpty(phone)) {
      sessionStorage.setItem('AddCard', 'setCard');
      pushNext();
    }
  };

  const checkGetInfo = () => {
    if (sessionStorage.getItem('AddCard') !== 'getInfo') {
      Toast.errorToast('비정상적인 접근입니다.');
      pushMain();
    }
  };

  const checkSetCard = () => {
    if (sessionStorage.getItem('AddCard') !== 'setCard') {
      Toast.errorToast('비정상적인 접근입니다.');
      pushMain();
    }
  };

  const onClickSetCard = () => {
    if (card.length > 0) {
      Toast.successToast(`${card.length}개의 카드를 등록했습니다.`);
      sessionStorage.removeItem('AddCard');
      pushMain();
    } else {
      Toast.infoToast(`카드를 선택해주세요!`);
    }
  };

  const setCardCheck = ({
    check,
    number,
  }: {
    check: boolean;
    number: string;
  }) => {
    if (check) {
      setSelectCard((prev) => [...prev, number]);
    } else {
      setSelectCard(selectCard.filter((v) => v !== number));
    }
  };

  return {
    phoneError,
    onClickSetCard,
    onChangePhone,
    phone,
    onClickFind,
    customButtonStyle,
    checkGetInfo,
    checkSetCard,
    card,
    setCardCheck,
    onResetPhone,
    setCard,
    getMyAllAccount,
    selectCard,
  };
};

export default useAddAccount;
