class registerValidation {
  public static checkEmptyState = (obj: Object) => {
    let check = 0;
    for (let [_, value] of Object.entries(obj)) {
      console.log(_ + value);
      if (value.length <= 0 || value === null || value === undefined) {
        check++;
        break;
      }
    }
    if (check > 0) {
      return false;
    } else {
      return true;
    }
  };

  public static checkErrorState = (obj: any) => {
    for (const value in obj) {
      if (obj[value].length !== 0) {
        return false;
      }
    }
    return true;
  };
}

export default registerValidation;
