import { Observable } from "rxjs";
import { Store } from "aurelia-store";
import { useEffect, useState } from "react";

export type State = {
  frameworks: string[];
}

export const initialState = {
  frameworks: ["Aurelia", "React", "Angular"]
} as State;


export const store = new Store<State>(initialState, {});

export const useStore = <T = State>(options?: {
    selector: (state: Observable<State>) => Observable<T>,
    initial: T
  }): [T | State, Store<State>] => {
  const [state, setState] = useState<T | State>(options ? options.initial : initialState);

  useEffect(() => {
    const subscription = options
      ? options.selector(store.state).subscribe((value: T) =>setState(value))
      : store.state.subscribe((state) => setState(state));

    return () => subscription.unsubscribe();
  });

  return [
    state,
    store
  ];
}
