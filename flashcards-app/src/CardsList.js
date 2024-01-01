import Card from './Card';

//this component renders list of cards using map function
//'cards' array of card objects 
//'card' is an element generated as a result of map iteration

const CardsList = ({ cards, handleDelete, showBack }) => {
    return ( 
        <div className="card-list">
            {cards.map((card) => (
                <div className="cards">
                    <Card key={card.id} id={card.id} front={card.front} back={card.back} handleDelete={handleDelete} />
                </div>
            ))}
        </div>
    );
}

export default CardsList;
