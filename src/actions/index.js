import { DO_SOMETHING } from "./types";

export const doSomethingAction = data => {
  return {
    type: DO_SOMETHING,
    payload: data
  };
};
