import NUMBERS from "../constants/numbers.js";
import { Random } from "@woowacourse/mission-utils";

const { maxLength, numberStart, numberEnd } = NUMBERS;

const randomNumber = () => {
  const computer = [];
  while (computer.length < maxLength) {
    const number = Random.pickNumberInRange(numberStart, numberEnd);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer;
};

export default randomNumber;
