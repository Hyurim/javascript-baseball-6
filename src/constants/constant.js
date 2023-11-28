const MESSAGE = Object.freeze({
  start: "숫자 야구 게임을 시작합니다.",
  numberInput: "숫자를 입력해주세요 : ",
  threeStrike: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  restart: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. \n",
});

const GAME_MESSAGE = Object.freeze({
  strike: "스트라이크",
  ball: "볼",
  nothing: "낫싱",
});
const ERROR_MESSAGE = Object.freeze({
  error: "[ERROR] 숫자를 다시 입력해주세요.",
  restartError: "[ERROR] 1과 2만 입력해주세요.",
});

export { MESSAGE, GAME_MESSAGE, ERROR_MESSAGE };
