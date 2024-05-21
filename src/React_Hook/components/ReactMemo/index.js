import React, { useCallback } from "react";
import Content from "./Content";

const ReactMemo = () => {
  const [count, setCount] = React.useState(0);

  const handelCounter = useCallback(() => {
    return setCount((prev) => prev + 1);
  }, []);

  const style = { padding: "20px" };
  const backgroundColor = { backgroundColor: "red" };

  return (
    <div style={{ ...style, ...backgroundColor }}>
      <h1> memo </h1>
      <Content onCount={handelCounter} />
      <h2> {count} </h2>
    </div>
  );
};
export default ReactMemo;
