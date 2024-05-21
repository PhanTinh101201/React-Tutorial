import React, { memo } from "react";

const Content = ({ onCount }) => {
  console.log("re-render");
  return (
    <div>
      <h1>Chào Mọi Người</h1>
      {/* <h1>{countProps}</h1> */}
      <button onClick={onCount}>Click</button>
    </div>
  );
};

export default memo(Content);