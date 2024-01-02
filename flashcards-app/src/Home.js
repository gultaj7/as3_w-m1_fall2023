import { useState, useEffect } from "react";
import CardsList from "./CardsList";

const Home = () => {
    const [cards, setCards] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    const handleDelete = (id) => {
        const newCards = cards.filter(card => card.id !== id);
        setCards(newCards);
    }

    useEffect(() => {
        setTimeout(() => {
            fetch("http://localhost:8001/cards") //returns promise
                .then(res=> {
                    if(res.ok) {
                        throw Error('failed to fetch the data')
                    }
                    return res.json() //another promise
                })
                .then(data=> {
                    setCards(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {
                    setIsPending(false);
                    setError(err.message);
                })
        }, 1000)
    }, []);
    
    return (
        <div className="Home">
            <div className="pop-up-messages">
                { error && <div>{ error }</div> }
                { isPending && <div>Loading...</div> }
            </div>
            
            { cards && <CardsList cards={ cards } handleDelete={handleDelete}/>}
        </div>
    );
}
 
export default Home;