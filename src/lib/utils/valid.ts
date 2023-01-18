export const validEmail = (value: string) => {
  if (!value.includes("@") || !value.includes(".")) {
    return false;
  } else {
    return true;
  }
};

export const validPassword = (value: string) => {
  if (value.length < 9) {
    return false;
  } else {
    return true;
  }
};
