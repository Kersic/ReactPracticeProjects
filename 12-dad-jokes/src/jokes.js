import React, { useState, useEffect } from "react";
import Joke from "./joke";
import "./Jokes.css";

Jokes.defaultProps = {
  numberOfJokes: 10
};

function Jokes({ numberOfJokes }) {
  const [jokes, setJokes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let currentJokes = JSON.parse(window.localStorage.getItem("jokes")) || [];
    if (currentJokes.length === 0) addMoreJokes();
    else setJokes(currentJokes);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("jokes", JSON.stringify(jokes));
    setIsLoading(false);
  }, [jokes]);

  const addMoreJokes = async () => {
    try {
      setIsLoading(true);
      let newJokes = [];
      while (newJokes.length < numberOfJokes) {
        const response = await fetch("https://icanhazdadjoke.com/", {
          method: "GET",
          headers: {
            Accept: "application/json"
          }
        });
        let data = await response.json();
        const newJoke = {
          votes: 0,
          text: data.joke,
          id: data.id
        };
        if (
          [...jokes, ...newJokes].filter(joke => joke.id === newJoke.id)
            .length === 0
        )
          newJokes.push(newJoke);
      }
      setJokes([...jokes, ...newJokes]);

      window.localStorage.setItem(
        "jokes",
        JSON.stringify([...jokes, ...newJokes])
      );
    } catch (e) {
      alert(e);
      setIsLoading(false);
    }
  };

  const changeVote = (id, newVote) => {
    setJokes(
      jokes.map(joke => {
        if (joke.id === id) joke.votes = newVote;
        return joke;
      })
    );
  };

  const sortedJokes = jokes.sort((a, b) => b.votes - a.votes);

  if (isLoading) {
    return (
      <div className="JokeListSpinner">
        <i className="far fa-8x fa-laugh fa-spin" />
        <h1 className="JokeListTitle">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="Jokes">
      <div className="JokesSidebar">
        <h1 className="JokeListTitle">
          <span>Dad</span> Jokes
        </h1>
        <img
          className="SmileImage"
          src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg"
        />
        <button className="GetMoreButton" onClick={addMoreJokes}>
          Fetch Jokes
        </button>
      </div>
      <div className="JokeList">
        {sortedJokes.map(joke => (
          <Joke key={joke.id} joke={joke} changeVote={changeVote} />
        ))}
      </div>
    </div>
  );
}

export default Jokes;
