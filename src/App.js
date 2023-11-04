import "./App.css";
import { useState } from "react";
import AnimalsShow from "./AnimalsShow";

function getRandomAnimal() {
  const animals = ["bird", "cat", "dog", "gator", "horse", "cow", "heart"];

  return animals[Math.floor(Math.random() * animals.length)];
}
function App() {
  const [animals, setAnimal] = useState([]);

  const handleClick = () => {
    setAnimal([...animals, getRandomAnimal()]);
  };

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalsShow type={animal} key={index} />;
  });

  return (
    <div className="app">
      <button onClick={handleClick}>Click here!</button>
      <div>{renderedAnimals}</div>
    </div>
  );
}

export default App;
