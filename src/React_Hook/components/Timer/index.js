import { useState, useEffect } from "react";

const Timer = () => {
  // const [countdown, setCoundown] = useState(180);
  const [state, setState] = useState();

  useEffect(() => {
    // const timerId = setInterval(() => {
    //   console.log("111");
    //   setCoundown((prev) => prev - 1);
    // }, 1000);

    return () => {
      URL.revokeObjectURL(state?.preview);
    };
  }, [state]);

  const handelPreviewAvatar = (e) => {
    const file = e.target.files[0];

    file.preview = URL.createObjectURL(file);
    setState(file);
  };
  return (
    <div>
      <input type="file" onChange={handelPreviewAvatar} />
      {state && <img src={state.preview} alt="" width="80%" />}
    </div>
  );
};

export default Timer;
