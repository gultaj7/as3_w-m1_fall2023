import { useState } from "react";
import CardsList from "./CardsList";

const Home = () => {
    const [cards, setCards] = useState([
        { language: 'french', word: 'yes', translation: 'oui', id: 1 },
        { language: 'french', word: 'no', translation: 'non', id: 2 },
        { language: 'french', word: 'speak', translation: 'parle', id: 3 },
        { language: 'french', word: 'eat', translation: 'mange', id: 4 }
    ])
    
    return (
        <div className="Home">
           <CardsList cards={ cards }/>
        </div>
    );
}
 
export default Home;