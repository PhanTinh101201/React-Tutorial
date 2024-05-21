import React, { useState } from "react";

const TodoList = () => {

  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState(() => {
    const history = JSON.parse(localStorage.getItem("historyJobs")) ?? [];
    return history;
  });

  const handelSubmit = () => {
    setJobs((prev) => {
      const newsJobs = [...prev, job];
      const jsonJob = JSON.stringify(newsJobs);
      localStorage.setItem("historyJobs", jsonJob);
      return newsJobs;
    });
    setJob("");
  };

  return (
    <div>
      <input value={job} type="text" onChange={(e) => setJob(e.target.value)} />
      <button onClick={handelSubmit}> add </button>
      <ul>
        {jobs.map((item, key) => {
          return (
            <div key={key}>
              <li>{item}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
