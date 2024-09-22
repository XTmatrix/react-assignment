import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <div>
        <h1>Counter</h1>
        <h1>{counter}</h1>
        <button onClick={() => setCounter(counter - 1)}>-</button>
        <button onClick={() => setCounter(counter + 1)}>+</button>
      </div>
    </>
  );
}

export default Counter;
