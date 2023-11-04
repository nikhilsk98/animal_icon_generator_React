import { useState } from "react";
import "./AnimalShow.css";
import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import dog from "./svg/dog.svg";
import horse from "./svg/horse.svg";
import heart from "./svg/heart.svg";
import gator from "./svg/gator.svg";
import cow from "./svg/cow.svg";

const svgMap = {
  bird,
  cow,
  dog,
  cat,
  horse,
  heart,
  gator,
};

function AnimalsShow({ type }) {
  const [click, setClick] = useState(0);

  const handleClick = () => {
    setClick(click + 1);
  };

  return (
    <div onClick={handleClick}>
      <img alt="animal" src={svgMap[type]} />
      <img alt="heart" src={heart} style={{ width: 10 + 10 * click }} />
    </div>
  );
}
export default AnimalsShow;
