import React from "react";

const App = () => {
  const handleMouse = () => {
    console.log("Button was Clicked!!");
  };
  return (
    <div>
      <button onClick={handleMouse} onMouseMove={handleMouse}>
        Add Animal
      </button>
    </div>
  );
};

export default App;
