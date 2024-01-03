import React, { useState } from 'react';
import Card from './Card';

//this component renders list of cards using map function
//'cards' array of card objects 
//'card' is an element generated as a result of map iteration

const CardsList = ({ cards, handleDelete, showBack }) => {
    const [isAnyCardFlipped, setIsAnyCardFlipped] = useState(false);
    const [front, setFront] = useState('');
    const [back, setBack] = useState('');
  
    const handleCardFlip = (flipped) => {
      setIsAnyCardFlipped(flipped);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
    
      const card = { front, back, format: "Want to Learn", lastModified: new Date().toISOString() };
      
      fetch('http://localhost:8000/cards', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(card)
      }).then(() => {
        console.log('new card added');
        window.location.reload();
      });
    };
    
    
  
    return (
      <div>
        <div className="create">
          <h4>New Card</h4>
          <form onSubmit={handleSubmit}>
            <label>front</label>
            <input 
              type="text"
              required
              value = { front }
              onChange={(e) => setFront(e.target.value)}
            />
            <label>back</label>
            <input 
              type="text"
              required
              value = { back }
              onChange={(e) => setBack(e.target.value)}
            />
            <button>create card</button>
          </form>
          
        </div>
        <div className={`card-list ${isAnyCardFlipped ? 'flipped' : ''}`}>
        {cards.slice().reverse().map((card) => (
          <div key={card.id} className="cards">
            <Card
              key={card.id}
              id={card.id}
              front={card.front}
              lastModified={card.lastModified}
              back={card.back}
              handleDelete={handleDelete}
              onFlip={handleCardFlip}
            />
          </div>
        ))}
        </div>
      </div>
      
    );
  };
  
  export default CardsList;