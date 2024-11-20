import React, { useState } from "react";

export default function SubjectValidationForm() {
  
  const [subjects, setSubjects] = useState({
    math: "",
    science: "",
    english: "",
    history: "",
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

    const isPass = Object.values(subjects).every((score) => Number(score) > 35);

    setResult(isPass ? "Pass" : "Fail");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Subject Marks Validation
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Math:</label>
            <input
              type="number"
              name="math"
              value={subjects.math}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block text-gray-700">Science:</label>
            <input
              type="number"
              name="science"
              value={subjects.science}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block text-gray-700">English:</label>
            <input
              type="number"
              name="english"
              value={subjects.english}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block text-gray-700">History:</label>
            <input
              type="number"
              name="history"
              value={subjects.history}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
          >
            Check Result
          </button>
        </form>
        {result && (
          <h3
            className={`mt-4 text-center text-lg font-bold ${
              result === "Pass" ? "text-green-500" : "text-red-500"
            }`}
          >
            Result: {result}
          </h3>
        )}
      </div>
    </div>
  );
}
