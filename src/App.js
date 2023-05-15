import { useState } from "react";
import ShowAnimal from "./AnimalShow";
import "./App.css";

const animalstoShow = () => {
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];
  return animals[Math.floor(Math.random() * animals.length)];
};

function App() {
  const [animals, setAnimal] = useState([]);
  const handleClick = () => {
    setAnimal([...animals, animalstoShow()]);
  };

  const renderedAnimals = animals.map((animal, index) => {
    return <ShowAnimal type={animal} key={index} />;
  });
  return (
    <div className="app">
      <button onClick={handleClick}>Show Animal</button>
      <div className="animal-list">{renderedAnimals}</div>
    </div>
  );
}

export default App;
