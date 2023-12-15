import './App.css';
import Navbar from './components/navbar.jsx';
import Footer from './components/footer.jsx';
import { Routes, Route } from 'react-router-dom';
import Acceuil from './components/acceuil.jsx';
import Pageville from './components/pageville.jsx';

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/Casablanca" element={<Pageville ville='casablanca'/>} />
        <Route path="/Marrackech" element={<Pageville ville='marrackech'/>} />
        <Route path="/Rabat" element={<Pageville ville='rabat'/>} />
        <Route path="/Tanger" element={<Pageville ville='tanger'/>} />
      </Routes>
    <Footer/>
    

    
    </>
  );
}

export default App;
