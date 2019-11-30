import React from 'react';
import { useStore } from "../store/state";

export const FrameworkList: React.FC = () => {
  const [state] = useStore();

  return <ul>
    {
      ((state && state.frameworks) || []).map((framework, key) => [
        <li key={key}>{ framework }</li>
      ])
    }
  </ul>;
}
