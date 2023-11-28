import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "../constants/constants.js";

const { start } = MESSAGE;

const outputView = {
  print(message) {
    Console.print(message);
  },

  start() {
    this.print(start);
  },

  errorPrint(message){
    this.print(message);
  },
  
}

export default outputView;