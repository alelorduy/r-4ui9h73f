import React, { Component } from "react";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [value, setValue] = useState("");

  function handleChange(event) {
    const { value } = event.target;
    setValue(value);
  }

  return (
    <div>
      <h1>Un repetidor</h1>
      <input
        type="text"
        placeholder="Empieza a escribir algo"
        value={value}
        onChange={handleChange}
      />
      <p className="repeater">{value}</p>
    </div>
  );
};

export default App;
