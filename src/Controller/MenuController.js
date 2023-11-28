import nameSplit from "../domain/namesplit.js";
import InputView from "../View/InputView.js";
import outputView from "../View/OutputView.js";
import randomCategory from "../domain/randomCategory.js"

class MenuController {
  constructor() {
    outputView.start();
  }
  async nameInput() {
    return this.#handleNameInput();
  }

  async #handleNameInput() {
    try {
      const name = await InputView.name();
      // 유효성 검사 내용
      return name;
    } catch (error) {
      outputView.errorPrint(error.message);
      return this.#handleNameInput();
    }
  }

  async #handleFoodInput(name) {
    try {
      const food = await InputView.food(name);
      // 유효성 검사 내용
      return food;
    } catch (error) {
      outputView.errorPrint(error.message);
      return this.#handleFoodInput();
    }
  }

  menuLogic(name){
    randomCategory();
    const coach = nameSplit(name);
    coach.forEach(value => {
      this.#handleFoodInput(value);
    });
  }
}

export default MenuController;