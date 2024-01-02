
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import FlashCards from './FlashCards';
import Contact from './Contact';
import Navbar from './Navbar';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flash-cards" element={ <FlashCards /> } />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
