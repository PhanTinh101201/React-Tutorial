import { useRef, useState } from "react";

export default function DemoUseRef() {
  const [count, setCount] = useState(99);

  let timer = useRef();

  const handelStart = () => {
    timer.current = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);
  };

  const handelStop = () => {
    clearInterval(timer.current);
  };
  
  return (
    <div className="App">
      <h1>{count}</h1>
      <div>
        <button onClick={handelStart}>Start</button>
        <button onClick={handelStop}>Stop</button>
      </div>
    </div>
  );
}
