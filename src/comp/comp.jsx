import { useReducer, useState } from "react";
import reducer from "./Reducer";

export default function Counter() {
  const initialState = { count: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputValue, setInputValue] = useState(0); // State for user input

  return (
    <div>
      <h2>Count: {state.count}</h2>

      {/* Input field to take user-defined increment value */}
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(Number(e.target.value))}
        placeholder="Enter a number"
      />

      {/* Buttons */}
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "INCREMENT_BY_VALUE", payload: inputValue })}>
        Increment by Input
      </button>
      <button onClick={() => dispatch({ type: "DOUBLE" })}>*2</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
}
