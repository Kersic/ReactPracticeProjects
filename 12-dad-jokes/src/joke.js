import React from "react";
import "./joke.css";

function Joke({ joke, changeVote }) {
  const getColor = () => {
    if (joke.votes >= 15) {
      return "#4CAF50";
    } else if (joke.votes >= 12) {
      return "#8BC34A";
    } else if (joke.votes >= 9) {
      return "#CDDC39";
    } else if (joke.votes >= 6) {
      return "#FFEB3B";
    } else if (joke.votes >= 3) {
      return "#FFC107";
    } else if (joke.votes >= 0) {
      return "#FF9800";
    } else {
      return "#f44336";
    }
  };

  const getEmoji = () => {
    if (joke.votes >= 15) {
      return "em em-rolling_on_the_floor_laughing";
    } else if (joke.votes >= 12) {
      return "em em-laughing";
    } else if (joke.votes >= 9) {
      return "em em-smiley";
    } else if (joke.votes >= 6) {
      return "em em-slightly_smiling_face";
    } else if (joke.votes >= 3) {
      return "em em-neutral_face";
    } else if (joke.votes >= 0) {
      return "em em-confused";
    } else {
      return "em em-angry";
    }
  };

  return (
    <div className="Joke">
      <div className="JokeButtons">
        <i
          className="fas fa-arrow-up"
          onClick={() => changeVote(joke.id, joke.votes + 1)}
        />
        <span className="JokeVotes" style={{ borderColor: getColor() }}>
          {joke.votes}
        </span>
        <i
          className="fas fa-arrow-down"
          onClick={() => changeVote(joke.id, joke.votes - 1)}
        />
      </div>
      <div className="JokeText">{joke.text}</div>
      <div className="JokeSmiley">
        <i className={getEmoji()} />
      </div>
    </div>
  );
}

export default Joke;
