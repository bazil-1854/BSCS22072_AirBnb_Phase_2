import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import ListingDetails from './Components/ListingDetails';
import SearchModal from './Components/SearchModal';

function App() {

  return (

    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchModal />} />
        <Route path="/listing/:id" element={<ListingDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
