import React, { useState } from 'react';

const Card = ({ id, front, back, handleDelete }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
      setIsFlipped(!isFlipped);
    };

    return (
      <div className={`card ${isFlipped ? 'flipped' : ''}`} key={id} onClick={handleFlip}>
        <div className="card-content">
          <div className={`front ${isFlipped ? 'hidden' : ''}`}>
            <h4>{front}</h4>
          </div>
          <div className={`back ${isFlipped ? '' : 'hidden'}`}>
            <h4>{back}</h4>
          </div>
        
        <div className="button-container">
          <button className="delete-button" onClick={() => handleDelete(id)}>
            delete
          </button>
          <button className="edit-button">update</button>
        </div>
        </div>
      </div>
      );
    };
    
    export default Card;