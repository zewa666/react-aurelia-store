import { Store } from "aurelia-store";
import { useEffect, useState } from "react";

export type State = {
  frameworks: string[];
}

export const initialState = {
  frameworks: ["Aurelia", "React", "Angular"]
} as State;


export const store = new Store<State>(initialState, {});

export const useStore = (): [State, Store<State>] => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const subscription = store.state.subscribe((state) => setState(state));

    return () => subscription.unsubscribe();
  });

  return [
    state,
    store
  ];
}
