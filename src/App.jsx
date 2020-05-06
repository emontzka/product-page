import React, { useState, useEffect } from 'react';
import logo from './images/logo.png';
import './App.scss';
import data from './data/productData.json';
import Product from './components/product';

const App = () => {
  const [products, setProducts] = useState(null);
  useEffect(() => setProducts(data), []);
  if (products === null) {
    return 'Loading...';
  }
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
      <section className="main">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3 col-md-4">

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
