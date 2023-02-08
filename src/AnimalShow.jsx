import React, { useState } from "react";
import "./AnimalShow.css";

import bird from "./assets/bird.svg";
import cat from "./assets/cat.svg";
import cow from "./assets/cow.svg";
import horse from "./assets/horse.svg";
import dog from "./assets/dog.svg";
import gator from "./assets/gator.svg";
import heart from "./assets/heart.svg";

const svgMap = {
  bird,
  cat,
  cow,
  horse,
  dog,
  gator,
};

const AnimalShow = ({ type }) => {
  const [like, setLike] = useState(32);

  return (
    <div className="animal-show" onClick={() => setLike((prev) => prev + 16)}>
      <img className="animal" src={svgMap[type]} alt="animal picture" />
      <img
        className="heart"
        src={heart}
        alt="heart"
        style={{ height: like + "px" }}
      />
    </div>
  );
};

export default AnimalShow;
