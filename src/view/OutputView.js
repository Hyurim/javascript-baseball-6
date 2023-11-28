import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "../constants/constant.js";

const { start } = MESSAGE;

const OutputView = {
  print(message) {
    Console.print(message);
  },

  start() {
    this.print(start);
  },

  errorPrint(message) {
    this.print(message);
  },
  onlyStrike(message){

  },
  onlyball(message){

  },
  ballAndStrike(message){

  },
  nothing(message){

  },
};

export default OutputView;
