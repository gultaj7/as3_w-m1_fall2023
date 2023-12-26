const CardsList = (props) => {
    const cards = props.cards;
    return ( 
        <div className="card-list">
            {cards.map((card)=> (
                <div className="cards" key={card.id}>
                    <h4>{ card.word }</h4>
                    <p>{ card.language }</p>
                </div>
            ))}
        </div>
     );
}
 
export default CardsList;