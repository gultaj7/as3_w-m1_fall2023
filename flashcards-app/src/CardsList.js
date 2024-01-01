//this component renders list of cards using map function
//'cards' array of card objects 
//'cars' is an element generated as a result of map iteration

const CardsList = ({ cards, handleDelete, showBack }) => {
    return ( 
        <div className="card-list">
            {cards.map((card) => (
                <div className="cards" key={card.id} front={card.front} back={card.back}>
                    <h4>{card.front}</h4>
                    <div className="button-container">
                        <button className="delete-button" onClick={() => handleDelete(card.id)}>delete</button>
                        <button className="edit-button" >update</button>
                        {/* <button className="show-button" onClick={() => showBack(card.id)}>SHOW</button> */}
                        
                    </div>
                    
                </div>
            ))}
        </div>
    );
}

export default CardsList;
