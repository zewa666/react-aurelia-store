import produce from "immer";
import { State, store } from "./state";

export function addFramework(state: State, newFramework: string) {
  return produce(state, draftState => {
    draftState.frameworks.push(newFramework);
  });
}

store.registerAction("addFramework", addFramework);
