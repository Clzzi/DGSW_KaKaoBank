const makeBirth = (birth: string): string => {
  return birth
    .replace(/[^0-9]/g, '')  
    .replace(/(\d{6})(\d{1})/g, '$1-$2')
    .replace('--', '-');
};

export default makeBirth;