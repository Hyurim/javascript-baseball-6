import { ERROR } from "./constants.js"

const { prefix } = ERROR;

const messageFormat = {
  errorMessage: (message) => `${prefix} ${message}`,


}

export default messageFormat;