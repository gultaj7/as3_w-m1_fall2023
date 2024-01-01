import React, { useState } from 'react';

const Card = ({ id, front, back, handleDelete }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
      setIsFlipped(!isFlipped);
    };

    return (
        <div className="card" key={id} onClick={ handleFlip }>
          <h4>{ isFlipped ? back : front }</h4>
          <div className="button-container">
            <button className="delete-button" onClick={() => handleDelete(id)}>delete</button>
            <button className="edit-button">update</button>
          </div>
        </div>
      );
    };
    
    export default Card;