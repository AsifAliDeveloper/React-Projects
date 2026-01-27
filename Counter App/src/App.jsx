import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };
  const reset = () => setCount(0);

  return (
    <div className={dark ? "app dark" : "app"}>
      <h1>Counter App</h1>

      <h2 className={count > 10 ? "high" : ""}>{count}</h2>

      <div className="buttons">
        <button onClick={increment}>+</button>
        <button onClick={decrement} disabled={count === 0}>
          -
        </button>
        <button onClick={reset}>Reset</button>
      </div>

      <button className="theme-btn" onClick={() => setDark(!dark)}>
        {dark ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}

export default App;
