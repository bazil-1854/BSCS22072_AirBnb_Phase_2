import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer'; 

function App() { 

  return (
    <Router>
      <Navbar  />
      <Home />
      <Footer />
    </Router>
  );
}

export default App;
