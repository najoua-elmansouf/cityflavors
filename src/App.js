import './App.css';
import Navbar from './components/navbar.jsx';
import Footer from './components/footer.jsx';
import { Routes, Route } from 'react-router-dom';
import Acceuil from './components/acceuil.jsx';


import Gallery from './components/Gallery.js';

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Acceuil />} />
      </Routes>
    <Footer/>
    

    
    </>
  );
}

export default App;
