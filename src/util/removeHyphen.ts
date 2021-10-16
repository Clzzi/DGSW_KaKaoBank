export const removeHyphen = (value: string): string => {
  return value
    .split('')
    .filter((v: string) => v !== '-')
    .join('');
};
