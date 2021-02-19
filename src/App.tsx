import React from "react";
import "./App.css";
import RedVelvet from "./red-velvet/details.json";

function App() {
  return (
    <div className="bg-gray-800 h-full">
      <h1 className="text-red-300 font-bold text-6xl">{RedVelvet.name}</h1>
    </div>
  );
}

export default App;
