import numberIsValid from "../util/numberIsValid.js";
import restartIsValid from "../util/restartIsValid.js";
import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";

class BaseballController {
  constructor() {
    OutputView.start();
    this.computer = randomNumber();
  }
  async #numberInput() {
    return this.#handleNumberInput();
  }

  async #handleNumberInput() {
    try {
      const numbers = await InputView.start();
      numberIsValid(numbers);
      return numbers;
    } catch (error) {
      OutputView.errorPrint(error.message);
      return this.#handleNumberInput();
    }
  }

  async restartInput() {
    return this.#handleRestartInput();
  }

  async #handleRestartInput() {
    try {
      const number = await InputView.restart();
      restartIsValid(number);
      return number;
    } catch (error) {
      OutputView.errorPrint(error.message);
      return this.#handleRestartInput();
    }
  }
  handleBaseballLogic(){
  }
}

export default BaseballController;
