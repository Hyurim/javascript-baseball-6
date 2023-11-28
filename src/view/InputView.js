import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "../constants/constant.js";

const {numberInput, restart} = MESSAGE;

const InputView = {
  async start() {
    return await Console.readLineAsync(numberInput);
  },

  async restart() {
    return await Console.readLineAsync(restart);
  },
};

export default InputView;
