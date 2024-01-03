import React, { useState } from 'react';
import { format } from 'date-fns';

const Card = ({ id, front, back, lastModified, handleDelete }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [newFront, setNewFront] = useState(front);
  const [newBack, setNewBack] = useState(back);

  const handleFlip = () => {
    if (!isEditing) {
      setIsFlipped(!isFlipped);
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    const updatedCard = {
      front: newFront,
      back: newBack,
      format: "Want to Learn",
      lastModified: new Date().toISOString(),
    };

    fetch(`http://localhost:8000/cards/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedCard),
    })
      .then(() => {
        console.log('Card updated successfully');
        setIsEditing(false);
        window.location.reload();
      })
      .catch(error => {
        console.error('Error updating card:', error);
      });
  };

  const formattedDate = format(new Date(lastModified), 'MMMM dd, yyyy HH:mm:ss');

  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`} key={id} onClick={handleFlip}>
      <div className="card-content">
        {isEditing ? (
          <div className="edit-mode">
            <div>
              <label>front:</label>
              <input
                type="text"
                value={newFront}
                onChange={(e) => setNewFront(e.target.value)}
              />
            </div>
            <div>
              <label>back:</label>
              <input
                type="text"
                value={newBack}
                onChange={(e) => setNewBack(e.target.value)}
              />
            </div>
            <button onClick={handleSaveClick}>Save</button>
          </div>        
        ) : (
          <>
            <div className={`front ${isFlipped ? 'hidden' : ''}`}>
              <h4>{front}</h4>
              <p className="last-modified">{formattedDate}</p>
            </div>
            <div className={`back ${isFlipped ? '' : 'hidden'}`}>
              <h4>{back}</h4>
            </div>
          </>
        )}

        <div className="button-container">
          <button className="delete-button" onClick={() => handleDelete(id)}>
            delete
          </button>
          {!isEditing && (
            <button className="edit-button" onClick={handleEditClick}>
              update
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;