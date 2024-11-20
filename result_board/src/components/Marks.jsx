import React, { useState } from "react";

export default function Marks() {
  const [subjects, setSubjects] = useState({
    math: "",
    science: "",
  });

  const [result, setResult] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSubjects((prevSubjects) => ({
      ...prevSubjects,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isPass = Object.values(subjects).every((score) => Number(score) > 35); // Check if all scores are above 35
    setResult(isPass ? "Pass" : "Fail");
  };

  return (
    <div>
      <div>
        <h2>SUBJECT MARKS</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>MATH : </label>
            <input
              type="number"
              name="math"
              value={subjects.math}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>SCIENCE : </label>
            <input
              type="number"
              name="science"
              value={subjects.science}
              onChange={handleChange}
            />
          </div>

          <button type="submit">Check result</button>
        </form>

        <h3>Result:{result}</h3>
      </div>
    </div>
  );
}
