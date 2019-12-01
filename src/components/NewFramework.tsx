import React, { useRef } from 'react';
import { useStore } from "../store/state";
import { addFramework } from '../store/actions';

export function NewFramework() {
  const [, store] = useStore();
  const valueRef = useRef<HTMLInputElement>();

  const addNewFramework = () => {
    store.dispatch(addFramework, valueRef.current!.value);
    valueRef.current!.value = "";
  }

  return (<div>
    <label>New framework:</label>
    <br />
    <input type="text"
      placeholder="enter the new framework"
      ref={valueRef as any} />
    <button onClick={addNewFramework}>Add</button>
  </div>);
}
