const makeMoneyComma = (money: string | number) => {
  if (typeof money === 'string') {
    return money.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  } else {
    return money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
};

export default makeMoneyComma;
