import React, { useState } from 'react';
import { useStore } from "../store/state";
import { addFramework } from '../store/actions';

export const NewFramework: React.FC = () => {
  const [, store] = useStore();
  const [framework, setFramework] = useState("");

  const addNewFramework = () => {
    store.dispatch(addFramework, framework);
    setFramework("");
  }

  return <div>
    <label>New framework:</label>
    <br />
    <input type="text"
      placeholder="enter the new framework"
      defaultValue={framework}
      onBlur={(e) => setFramework(e.target.value)} />
    <button onClick={addNewFramework}>Add</button>
  </div>;
}
