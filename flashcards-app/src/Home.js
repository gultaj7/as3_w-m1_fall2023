import { useState, useEffect } from "react";
import CardsList from "./CardsList";

const Home = () => {
    const [cards, setCards] = useState(null);
    const [isPending, setIsPending] = useState(true);

    const handleDelete = (id) => {
        const newCards = cards.filter(card => card.id !== id);
        setCards(newCards);
    }

    useEffect(() => {
        setTimeout(() => {
            fetch("http://localhost:8000/cards") //returns promise
            .then(res=> {
                return res.json() //another promise
            })
            .then(data=> {
                setCards(data);
                setIsPending(false);
            });
        }, 1000)
    }, []);
    
    return (
        <div className="Home">
            { isPending && <div style = {{ color: 'grey' }}>Loading...</div> }
           {cards && <CardsList cards={ cards } handleDelete={handleDelete}/>}
        </div>
    );
}
 
export default Home;