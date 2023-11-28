import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "../constants/constants.js";

const { name, dontEat } = MESSAGE;

const InputView = {
  async name() {
    return await Console.readLineAsync(name);
  },

  async food(name) {
    return await Console.readLineAsync(dontEat);
  },
};

export default InputView;
