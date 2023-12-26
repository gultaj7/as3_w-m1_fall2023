const CardsList = ({ cards, handleDelete }) => {
    return ( 
        <div className="card-list">
            {cards.map((card) => (
                <div className="cards" key={card.id}>
                    <h4>{card.front}</h4>
                    <div className="button-container">
                        <button className="delete-button" onClick={() => handleDelete(card.id)}>delete</button>
                        <button className="edit-button" >update</button>
                    </div>
                    
                </div>
            ))}
        </div>
    );
}

export default CardsList;
