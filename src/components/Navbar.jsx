import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/navbar.css'
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg nav">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                <img src={logo} alt="logo" style={{ width : '150px',height :'100px'}}/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse ville-container" id="navbarNavAltMarkup" >
                    <div className="navbar-nav ville" >
                        <Link to="/Casablanca" className="nav-link active" style={{ color: '#990909', fontWeight: 'bold' }}>Casablanca</Link>
                        <Link to="/Marrackech" className="nav-link active" style={{ color: '#990909', fontWeight: 'bold' }}>Marrackech</Link>
                        <Link to="/Rabat" className="nav-link active" style={{ color: '#990909', fontWeight: 'bold' }}>Rabat</Link>
                        <Link to="/Tanger" className="nav-link active" style={{ color: '#990909', fontWeight: 'bold' }}>Tanger</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;