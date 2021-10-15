const makeDate = (date: string):string => {
  const head = date.substring(5,7);
  const tail = date.substring(8,10);
  return `${head}.${tail}`;
}

export default makeDate;