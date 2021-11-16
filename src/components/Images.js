import React, { useState, useEffect } from "react";
import "../styles/Images.css";
import uuid from "react-uuid";

// Import all required images
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    return (images[item.replace("./", "").replace(".png", "")] = r(item));
  });
  return images;
}

const images = importAll(
  require.context("../sf_images/characters", false, /\.(png|jpe?g|svg)$/)
);

function Images(props) {
  const [characters, setCharacters] = useState(images);

  // Shuffle character object and set new state
  function shuffleCharacters(s) {
    let newCharactersObj = {};
    const keys = Object.keys(characters);
    keys.sort(() => {
      return Math.random() - 0.5;
    });
    keys.forEach((key) => {
      newCharactersObj[key] = images[key];
    });
    setCharacters(newCharactersObj);
  }

  useEffect(() => {
    document
      .querySelectorAll(".character")
      .forEach((char) => char.addEventListener("click", shuffleCharacters));

    return () => {
      document
        .querySelectorAll(".character")
        .forEach((char) =>
          char.removeEventListener("click", shuffleCharacters)
        );
    };
  });

  return (
    <div className="image-container">
      {Object.keys(characters).map((char) => {
        return (
          <div className="character" key={uuid()} id={char}>
            <img src={characters[char].default} key={uuid()} alt=""></img>
            <h3>{String(char).replace(/[^a-z]/gi, " ")}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Images;