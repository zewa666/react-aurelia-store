import React from 'react';
import { map } from 'rxjs/operators';
import { useStore } from "../store/state";

export const CounterFooter: React.FC = () => {
  const [count] = useStore<number>({
    selector: (state) => state.pipe(
      map((state) => state.frameworks.length)
    ),
    initial: 0
  });

  return <footer>No. of frameworks: {count}</footer>;
}
