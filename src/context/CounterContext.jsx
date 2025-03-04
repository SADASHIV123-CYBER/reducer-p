import { createContext, useReducer, useContext } from "react";
import reducer from "./reuducer";

const CounterContext = createContext();

const initialState = { count: 0, history: [], darkMode: false };

export const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = () => useContext(CounterContext);
