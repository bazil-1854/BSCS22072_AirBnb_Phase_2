import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import ListingDetails from './Components/ListingDetails';

function App() {

  return (

    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listing/:id" element={<ListingDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
