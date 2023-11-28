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
      return numbers;
    } catch (error) {
      return this.#handleNumberInput();
    }
  }

  async restartInput() {
    return this.#handleRestartInput();
  }

  async #handleRestartInput() {
    try {
      const number = await InputView.restart();
      return number;
    } catch (error) {
      return this.#handleRestartInput();
    }
  }
  handleBaseballLogic(){
  }
}

export default BaseballController;
