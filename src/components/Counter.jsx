import { useState } from "react";
import { useCounter } from "../context/CounterContext";

const Counter = () => {
  const { state, dispatch } = useCounter();
  const [inputValue, setInputValue] = useState(1);

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen ${state.darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
      <h2 className="text-3xl font-bold mb-4">Count: {state.count}</h2>
      
      {/* Input for custom increment/multiply/divide */}
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(Number(e.target.value))}
        className="border p-2 rounded mb-4 text-gray-900"
      />

      {/* Buttons */}
      <div className="grid grid-cols-3 gap-3">
        <button className="btn" onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
        <button className="btn" onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
        <button className="btn" onClick={() => dispatch({ type: "INCREMENT_BY_VALUE", payload: inputValue })}>+{inputValue}</button>
        <button className="btn" onClick={() => dispatch({ type: "MULTIPLY", payload: inputValue })}>×{inputValue}</button>
        <button className="btn" onClick={() => dispatch({ type: "DIVIDE", payload: inputValue })}>÷{inputValue}</button>
        <button className="btn" onClick={() => dispatch({ type: "RESET" })}>Reset</button>
        <button className="btn bg-blue-500" onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
          {state.darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      {/* History */}
      <div className="mt-5">
        <h3 className="text-xl font-semibold mb-2">History</h3>
        <ul className="border p-2 rounded h-32 overflow-y-auto">
          {state.history.length > 0 ? (
            state.history.map((val, index) => <li key={index} className="text-sm">{val}</li>)
          ) : (
            <p className="text-sm text-gray-400">No history yet</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Counter;
