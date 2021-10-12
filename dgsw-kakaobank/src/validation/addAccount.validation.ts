class addAccountValidation {
  public static checkEmpty = (value: string) => {
    if (value.length < 13 || value === null || value === undefined) {
      return false;
    }
    return true;
  };
}

export default addAccountValidation;
