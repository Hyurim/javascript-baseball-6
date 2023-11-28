const FOOD = {
  japan: "규동, 우동, 미소시루, 스시, 가츠동, 오니기리, 하이라이스, 라멘, 오코노미야끼",
  korea: "김밥, 김치찌개, 쌈밥, 된장찌개, 비빔밥, 칼국수, 불고기, 떡볶이, 제육볶음",
  china: "깐풍기, 볶음면, 동파육, 짜장면, 짬뽕, 마파두부, 탕수육, 토마토 달걀볶음, 고추잡채",
  asian: "팟타이, 카오 팟, 나시고렝, 파인애플 볶음밥, 쌀국수, 똠얌꿍, 반미, 월남쌈, 분짜",
  western: "라자냐, 그라탱, 뇨끼, 끼슈, 프렌치 토스트, 바게트, 스파게티, 피자, 파니니",
};

const MESSAGE = Object.freeze({
  start: "점심 메뉴 추천을 시작합니다.\n",
  name: "코치의 이름을 입력해 주세요. (, 로 구분)\n",
  dont_eat: "(이)가 못 먹는 메뉴를 입력해 주세요.\n",
  result: "메뉴 추천 결과입니다.",
  end: "추천을 완료했습니다.",
});

const ERROR = Object.freeze({
  prefix: "[ERROR]",
  invalid_name_error_message: '유효하지 않은 이름입니다. 다시 입력해주세요.',
  invalid_food_error_message: '유효하지 않은 메뉴입니다. 다시 입력해주세요.'
});

const CATEGORY = Object.freeze({
  category: ["일식", "한식", "중식", "아시안", "양식"],
})

export { FOOD, MESSAGE, ERROR, CATEGORY };
