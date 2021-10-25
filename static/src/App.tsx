import { bar, foo, num } from "@/env";
import inspect from "object-inspect";
import { useState } from "react";
import "./App.css";
import logo from "./logo.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <ul>
          <li>
            {"foo: "}
            {inspect(foo)}
          </li>
          <li>
            {"bar: "}
            {inspect(bar)}
          </li>
          <li>
            {"num: "}
            {inspect(num)}
          </li>
        </ul>
      </header>
    </div>
  );
}

export default App;
