import React, { useState } from "react";
import "../../css/Products/Products.css";
import ProductModal from "./ProductModal";
// import Bounce from "react-reveal/Bounce";

function Products(props) {
  // console.log("image");
  const [product, setProduct] = useState("");

  const openModal = (product) => {
    setProduct(product);
  };
  const closeModel = () => {
    setProduct(false);
  };
  return (
    <div className="products-wrapper">
      {props.products.map((product) => (
        <div className="product-item" key={product.id}>
          <a href="#" onClick={() => openModal(product)}>
            <img src={product.imageUrl} alt={product.title} />
          </a>
          <div className="product-title">
            <p>{product.title}</p>
            <span>${product.price}</span>
          </div>
          <button onClick={() => props.addToCart(product)}>Add To Cart</button>
        </div>
      ))}
      <ProductModal product={product} closeModel={closeModel} />
    </div>
  );
}
export default Products;

// "react-reveal": "^1.2.2",
// <Bounce clear cascade></Bounce>
