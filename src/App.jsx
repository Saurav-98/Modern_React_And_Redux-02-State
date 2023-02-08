import React, { useState } from "react";
import "./App.css";

import AnimalShow from "./AnimalShow";

const getRandomAnimal = () => {
  const animals = ["bird", "cat", "cow", "horse", "dog", "gator"];
  return animals[Math.floor(Math.random() * animals.length)];
};

const App = () => {
  const [animals, setAnimals] = useState([]);

  const handleMouseClick = () => {
    setAnimals((prev) => [...prev, getRandomAnimal()]);
  };

  const renderedAnimals = animals.map((animal) => (
    <AnimalShow type={animal} key={Math.random() * 123456} />
  ));
  return (
    <div className="app">
      <button onClick={handleMouseClick}>Add Animal</button>
      <div className="animal-list">{renderedAnimals}</div>
    </div>
  );
};

export default App;
