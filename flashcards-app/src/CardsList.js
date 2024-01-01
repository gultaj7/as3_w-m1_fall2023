import React, { useState } from 'react';
import Card from './Card';

//this component renders list of cards using map function
//'cards' array of card objects 
//'card' is an element generated as a result of map iteration

const CardsList = ({ cards, handleDelete, showBack }) => {
    const [isAnyCardFlipped, setIsAnyCardFlipped] = useState(false);
  
    const handleCardFlip = (flipped) => {
      setIsAnyCardFlipped(flipped);
    };
  
    return (
      <div className={`card-list ${isAnyCardFlipped ? 'flipped' : ''}`}>
        {cards.map((card) => (
          <div className="cards">
            <Card
              key={card.id}
              id={card.id}
              front={card.front}
              back={card.back}
              handleDelete={handleDelete}
              onFlip={handleCardFlip}
            />
          </div>
        ))}
      </div>
    );
  };
  
  export default CardsList;