import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import "./Deck.css";
import "./Card";
import Card from "./Card";
const API_BASE = "https://deckofcardsapi.com/api/deck/";

function Deck() {
  const [deckId, setDeckId] = useState("");
  const [cards, setCards] = useState([]);
  const [noCardsLeft, setNoCardsLeft] = useState(false);
  useEffect(() => {
    axios.get(API_BASE + "new/shuffle/?deck_count=1").then(response => {
      setDeckId(response.data.deck_id);
    });
  }, []);

  const getNewCard = () => {
    axios.get(API_BASE + deckId + "/draw/?count=1").then(response => {
      console.log(response);
      if (response.data.cards.length > 0) {
        let card = response.data.cards[0];
        setCards([
          ...cards,
          {
            code: card.code,
            image: card.image,
            name: card.value + " of " + card.suit
          }
        ]);
      } else {
        setNoCardsLeft(true);
      }
    });
  };

  return (
    <div className="Deck">
      <h2 className="DeckTitle">♦ Card Dealer ♦</h2>
      <h3 className="DeckTitle subtitle">♦ A little demo made with react ♦</h3>
      <button className="DeckButton" onClick={getNewCard}>
        Get Card!
      </button>
      <br />
      {noCardsLeft && <p className="DeckTitle">No cards left</p>}
      <div className="cardsArea">
        {cards.map(card => (
          <Card card={card} />
        ))}
      </div>
    </div>
  );
}

export default Deck;
