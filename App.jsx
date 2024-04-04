// App.js
import React, { useState } from "react";
import "./App.css";

function App() {
  const [values, setValues] = useState({
    value1: "",
    value2: "",
    value3: "",
    value4: "",
  });
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const data = await response.json();
    setResult(data.result);
  };

  const handleView = async () => {
    const response = await fetch("/view");
    const data = await response.json();
    setResult(data.result);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="value1"
          value={values.value1}
          onChange={handleChange}
        />
        <input
          type="number"
          name="value2"
          value={values.value2}
          onChange={handleChange}
        />
        <input
          type="number"
          name="value3"
          value={values.value3}
          onChange={handleChange}
        />
        <input
          type="number"
          name="value4"
          value={values.value4}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      <button onClick={handleView}>View</button>
      <div className="output">{result}</div>
    </div>
  );
}

export default App;
