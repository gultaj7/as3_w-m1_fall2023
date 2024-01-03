import React, { useState } from 'react';
import { format } from 'date-fns';

const Card = ({ id, front, back, lastModified, handleDelete }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
      setIsFlipped(!isFlipped);
    };
    
    const formattedDate = format(new Date(lastModified), 'MMMM dd, yyyy HH:mm:ss');


    return (
      <div className={`card ${isFlipped ? 'flipped' : ''}`} key={id} onClick={handleFlip}>
        <div className="card-content">
          <div className={`front ${isFlipped ? 'hidden' : ''}`}>
            <h4>{front}</h4>
            <p className="last-modified">{formattedDate}</p>
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