import { Random } from "@woowacourse/mission-utils";

const randomCategory = () => {
  const category = [];
  while (category.length < 5) {
    const number = Random.pickNumberInRange(1, 5);
    if (new Set(category).size !== 3) {
      category.push(number);
    }
  }
};

export default randomCategory;