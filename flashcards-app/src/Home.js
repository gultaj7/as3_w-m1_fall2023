import { useState, useEffect } from "react";
import CardsList from "./CardsList";

const Home = () => {
    const [cards, setCards] = useState(null)

    const handleDelete = (id) => {
        const newCards = cards.filter(card => card.id !== id);
        setCards(newCards);
    }

    useEffect(() => {
        fetch("http://localhost:8000/cards") //returns promise
            .then(res=> {
                return res.json() //another promise
            })
            .then(data=> {
                setCards(data);
            })
    }, []);
    
    return (
        <div className="Home">
           {cards && <CardsList cards={ cards } handleDelete={handleDelete}/>}
        </div>
    );
}
 
export default Home;