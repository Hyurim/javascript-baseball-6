import { ERROR_MESSAGE } from "../constants/constant.js";

const numberIsValid = (numbers) => {
  validTest(numbers);
  return true;
};

const validTest = (numbers) => {
  const numberRegex = /^(?!.*(.).*\1)\d{3}$/;
  if (!numberRegex.test(numbers)) {
    throw new Error(ERROR_MESSAGE.error);
  }
};

export default numberIsValid;
