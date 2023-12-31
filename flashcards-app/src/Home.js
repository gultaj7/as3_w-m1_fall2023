import { useState } from "react";
import CardsList from "./CardsList";

const Home = () => {
    const [cards, setCards] = useState([
        { front: 'yes', back: 'oui', id: 1 },
        { front: 'no', back: 'non', id: 2 },
        { front: 'speak', back: 'parle', id: 3 },
        { front: 'eat', back: 'mange', id: 4 },
        { front: "I'm eating a pizza", back: 'Je mange une pizza', id: 5 }
    ])

    const handleDelete = (id) => {
        const newCards = cards.filter(card => card.id !== id);
        setCards(newCards);
    }
    
    return (
        <div className="Home">
           <CardsList cards={ cards } handleDelete={handleDelete}/>
        </div>
    );
}
 
export default Home;