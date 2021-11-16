import React from "react";
import "../styles/ScoreBoard.css";
// import uuid from "react-uuid";

function ScoreBoard(props) {
  return (
    <div className="score">
      <h3>
        Score: {props.score || 0} | Best Score: {props.bestScore || 0}
      </h3>
    </div>
  );
}

export default ScoreBoard;