import React from "react";
import "../../css/Cart/Cart.css";
import Products from "../Products/Products";

export default function Cart(props) {
  return (
    <div className="cart-wrapper">
      <div className="cart-title">
        {props.cartItems.length === 0 ? (
          "Empty Cart"
        ) : (
          <p>There is {props.cartItems.length} Products on cart</p>
        )}
      </div>
      <div className="cart-items">
        {props.cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.imageUrl} alt="" />
            <div className="cart-info">
              <div>
                <p>Title: {item.title}</p>
                <p>Qty: {item.qty}</p>
                <p>Price: ${item.price}</p>
              </div>
              <button onClick={() => props.removeFromeCart(item)}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
