import React from 'react';
import Utama from './Components/utama';
import {Link} from 'react-router-dom';
import './App.css';
import Corona from './images/virus.svg';

class App extends React.Component{
  render(){
    return(
      <div>
          <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
          <div className="container">
          <img src={Corona} alt="virus"></img>
          <a class="navbar-brand">C O V I D - 1 9</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto w-100 justify-content-end TEXT-WHITE">
              <li className="nav-item">
                <Link className="nav-link" to="/">HOME</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/protokol">PROTOCOL KESEHATAN</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/data">DATA COVID DI INDONESIA</Link>
              </li>
            </ul>
            </div>
          </div>
        </nav>
        <p><Utama/></p>
      </div>
    );
  }
}

export default App;