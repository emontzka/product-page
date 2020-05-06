import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './App.scss';
import data from './data/productData.json';
import Product from './components/product';
import logo from './images/logo.png';

function App() {
  const [products, setProducts] = useState(null);
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };

  useEffect(() => setProducts(data), []);

  if (products === null) {
    return 'Loading...';
  }
  return (
    <div className="App">
      <div className={menu ? 'mobile-menu open' : 'mobile-menu'}>
        <FontAwesomeIcon onClick={toggleMenu} icon={faTimes} size="lg" />
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Help</a></li>
        </ul>
      </div>
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
                <FontAwesomeIcon onClick={toggleMenu} icon={faBars} size="lg" />
              </nav>
              <h1 className="h1 page-title">This is a headline</h1>
            </div>
          </div>
        </div>

      </header>
      <section className="main">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3 col-md-4">
              <div className="row">
                <div className="col-12">
                  <ul className="filters">
                    <li>Footwear</li>
                    <li>Water Fountains</li>
                    <li>Garage Door Openers</li>
                    <li>Smart Home Tech</li>
                    <li>Beverages</li>
                    <li>Education</li>
                  </ul>
                </div>
              </div>

            </div>
            <div className="col-xl-9 col-md-8">
              <div className="row">
                {console.dir(Object.values(products)[0])}
                {Object.values(products)[0].map((p) => {
                  return <Product key={p.Id} product={p} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
