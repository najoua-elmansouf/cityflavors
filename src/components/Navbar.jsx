import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/navbar.css'
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                <img src={logo} alt="logo" style={{ width : '150px',height :'100px'}}/>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
                <div className="collapse navbar-collapse ville-container" id="navbarNav" >
                    <ul className="navbar-nav ville" >
                       <li class="nav-item">
                        <Link to="/Casablanca" className="nav-link active" style={{ color: '#990909', fontWeight: 'bold' }}>Casablanca</Link>
                        </li>
                        <li class="nav-item">
                        <Link to="/Marrackech" className="nav-link" style={{ color: '#990909', fontWeight: 'bold' }}>Marrackech</Link>
                        </li>
                        <li class="nav-item">
                        <Link to="/Rabat" className="nav-link " style={{ color: '#990909', fontWeight: 'bold' }}>Rabat</Link>
                        </li>
                        <li class="nav-item">
                        <Link to="/Tanger" className="nav-link" style={{ color: '#990909', fontWeight: 'bold' }}>Tanger</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;