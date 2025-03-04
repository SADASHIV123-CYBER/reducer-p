import Counter from "./components/Counter";
import { CounterProvider } from "./context/CounterContext";

const App = () => (
  <CounterProvider>
    <Counter />
  </CounterProvider>
);

export default App;
