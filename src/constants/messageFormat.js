import { GAME_MESSAGE } from "./constant.js";

const { strike, ball, nothing } = GAME_MESSAGE;

const MESSAGEFORMAT = {
  strike: (answer) => `${answer}${strike}`,
  ball: (answer) => `${answer}${ball}`,
  ballAndStrike: (answer) => `${answer[0]}${ball} ${answer[1]}${strike}`,
  nothing: (answer) => `${nothing}`,
};

export default MESSAGEFORMAT;
