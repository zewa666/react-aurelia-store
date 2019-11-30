import { State, store } from "./state";

export function addFramework(state: State, newFramework: string) {
  return Object.assign({}, state, { frameworks: [ ...state.frameworks, newFramework ] } );
}

store.registerAction("addFramework", addFramework);
