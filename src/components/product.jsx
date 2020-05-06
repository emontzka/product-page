import React from 'react';
// import Bike from '../images/bike.png';


export default function Product(props) {
  const { product } = props;
  // const src = `/images/${product.Image}`;
  return (
    <div className="col-xl-4 col-lg-6">
      <div className="product-card">
        <img src={require(`../images/${product.Image}`)} alt="test" />
        <div className="text-area">
          <h2 className="h2">{product.title}</h2>
          <p>{product.description}</p>
        </div>
        <a href="#" className="button h2">Buy Now</a>

      </div>

    </div>
  );
}
