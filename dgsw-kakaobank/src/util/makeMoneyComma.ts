const makeMoneyComma = (money: string | number) => {
  if (typeof money === 'string') {
    return money.toLocaleString();
  } else {
    return money.toString().toLocaleString();
  }
};

export default makeMoneyComma;
