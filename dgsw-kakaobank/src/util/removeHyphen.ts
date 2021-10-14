export const removeHyphen = (value: string): string => {
  console.log(
    value
      .split('')
      .filter((v: string) => v !== '-')
      .join(''),
  );
  
  return value
    .split('')
    .filter((v: string) => v !== '-')
    .join('');
};
