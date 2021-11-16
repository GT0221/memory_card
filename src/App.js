import React, {useState, useEffect} from 'react';
import Modal from './components/Modal';
import Images from './components/Images';
import ScoreBoard from './components/ScoreBoard';
import './styles/App.css';

function App() {
  const [clickedCharacter, setClickedCharacter] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    const handleCharClick = (e) => {
      const id = e.currentTarget.id;

      if (!clickedCharacter.includes(id)) {
        setClickedCharacter([...clickedCharacter, id]);
        setScore(score + 1);
        setBestScore(bestScore);
      } else if (clickedCharacter.includes(id)) {
        setClickedCharacter(() => []);
        setScore(0);
        setBestScore(score <= bestScore ? bestScore : score);
      }
    };

    document
      .querySelectorAll(".character")
      .forEach((char) => char.addEventListener("click", handleCharClick));
    return () => {
      document
        .querySelectorAll(".character")
        .forEach((char) => char.removeEventListener("click", handleCharClick));
    };
  });

  return (
    <div className="App">
      <h1>Street Fighter Memory Game</h1>
      <Modal />
      <ScoreBoard score={score} bestScore={bestScore}/>
      <Images />
    </div>
  );
}

export default App;