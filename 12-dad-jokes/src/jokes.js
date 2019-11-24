import React, { useState, useEffect } from "react";
import Joke from "./joke";

Jokes.defaultProps = {
  numberOfJokes: 3
};

function Jokes({ numberOfJokes }) {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    addMoreJokes();
  }, []);

  const addMoreJokes = async () => {
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
      console.log(newJoke);
      newJokes.push(newJoke);
    }
    setJokes([...jokes, ...newJokes]);
  };

  const changeVote = (id, newVote) => {
    setJokes(
      jokes.map(joke => {
        if (joke.id === id) joke.votes = newVote;
        return joke;
      })
    );
  };

  return (
    <div className="Jokes">
      {/* <button onClick={addMoreJokes}>AddMore</button> */}
      <div className="JokesSidebar">
        <h1 className="JokeListTitle">
          <span>Dad</span> Jokes
        </h1>
        <img>
        </img>
      </div>
      <div className="JokeList">
        {jokes.map(joke => (
          <p>{joke.text}</p>
          // <Joke key={joke.id} joke={joke} changeVote={changeVote} />
        ))}
      </div>
    </div>
  );
}

export default Jokes;
