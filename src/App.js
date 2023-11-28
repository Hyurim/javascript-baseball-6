import MenuController from "./Controller/MenuController.js";

class App {
  constructor() {
    this.menuController = new MenuController();
  }
  async play() {
    const name = await this.menuController.nameInput();
    this.menuController.menuLogic(name);
  }
}

export default App;
