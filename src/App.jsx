import React from 'react';
import logo from './images/logo.png';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <nav className="header-nav">
                <img src={logo} className="App-logo" alt="logo" />
                <ul className="main-menu">
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Products</a></li>
                  <li><a href="#">Help</a></li>
                </ul>
              </nav>
              <h1 className="h1 page-title">This is a headline</h1>
            </div>
          </div>
        </div>

      </header>
    </div>
  );
}

export default App;
