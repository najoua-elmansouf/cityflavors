import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/navbar.css'
import logo from '../images/logo.png';
function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg nav">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                <img src={logo} alt="logo" style={{ width : '150px',height :'100px'}}/>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse ville-container" id="navbarNavAltMarkup" >
                    <div className="navbar-nav ville" >
                        <a className="nav-link active " aria-current="page" href="#" style={{color : '#990909',fontWeight:'bold'}}>Casablanca</a>
                        <a className="nav-link active" aria-current="page" href="#" style={{color : '#990909',fontWeight:'bold'}}>Marrackech</a>
                        <a className="nav-link active" aria-current="page" href="#" style={{color : '#990909',fontWeight:'bold'}}>Rabat</a>
                        <a className="nav-link active" aria-current="page" href="#" style={{color : '#990909',fontWeight:'bold'}}>Tanger</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;