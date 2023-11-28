import BaseballController from "./controller/BaseballController.js";

class App {
  constructor() {
    this.baseballController = new BaseballController();
  }
  async play() {
    this.baseballController.handleBaseballLogic();
  }
}

export default App;
