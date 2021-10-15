const getCompany = (number: string) => {
  const head: string = number.substring(0, 3);
  let company: string = '';
  switch (head) {
    case '001':
      company = '토스';
      break;
    case '002':
      company = '카카오뱅크';
      break;
    case '003':
      company = '신한카드';
      break;
    default:
      company = '토스2';
      break;
  }
  return company;
};

export default getCompany;
