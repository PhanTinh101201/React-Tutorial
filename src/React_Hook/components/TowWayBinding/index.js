import React, { useState } from "react";

const courses = [
  {
    id: 1,
    course: "javaScript",
  },
  {
    id: 2,
    course: "javaSprintBoot",
  },
  {
    id: 3,
    course: "javaSprintBoot",
  },
];

const TowWayBinding = () => {
  const [checked, setChecked] = useState([]);

  const handelCheckBox = (id) => {
    console.log(id);
    setChecked((prev) => {
      const isCheck = checked.includes(id);
      if (isCheck) {
        return checked.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  console.log(checked);

  const handelCheckAll = () => {
    const all = courses.map((item) => item.id);
    console.log(all);
    if (checked.length === courses.length) {
      return setChecked([]);
    }
    setChecked(all);
  };
  
  return (
    <div className="CheckBox">
      {courses.map((item, key) => {
        return (
          <div key={key}>
            <input
              checked={checked.includes(item.id)}
              type="checkbox"
              onChange={() => handelCheckBox(item.id)}
            />
            {item.course}
          </div>
        );
      })}
      <button onClick={handelCheckAll}>CheckAll</button>
    </div>
  );
};
export default TowWayBinding;
