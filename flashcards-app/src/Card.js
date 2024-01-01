import React, { useState } from 'react';

const Card = ({ id, front, back, handleDelete }) => {
    return (
        <div className="card" key={id}>
          <h4>{ front }</h4>
          <div className="button-container">
            <button className="delete-button" onClick={() => handleDelete(id)}>delete</button>
            <button className="edit-button">update</button>
          </div>
        </div>
      );
    };
    
    export default Card;