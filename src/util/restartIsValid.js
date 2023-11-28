import { ERROR_MESSAGE } from "../constants/constant.js";

const restartIsValid = (number) => {
  validTest(number);
  return true;
};

const validTest = (number) => {
  const reStartRegex = /^[1-2]$/;
  if (!reStartRegex.test(number)) {
    throw new error(ERROR_MESSAGE.restartError);
  }
};

export default restartIsValid;
