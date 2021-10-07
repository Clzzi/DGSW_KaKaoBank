const makeBirth = (birth: string): string => {
  return birth
    .replace(/[^0-9]/g, '')  
    .replace(/(\d{6})(\d{1})/g, '$1-$2')
    .replace('--', '-');
};

export default makeBirth;


// .replace(
    //   /^\\d{2}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|[3][01])\\-[1-4][0-9]{6}$/,
    //   '$1-$2',
    // )