import React from "react";
import "./joke.css";

function Joke({ joke, changeVote }) {
  return (
    <div className="Joke">
      <div>
        <button onClick={() => changeVote(joke.id, joke.votes + 1)}>up</button>
        <p>{joke.votes}</p>
        <button onClick={() => changeVote(joke.id, joke.votes - 1)}>
          down
        </button>
      </div>
      <p>{joke.text}</p>
    </div>
  );
}

export default Joke;
