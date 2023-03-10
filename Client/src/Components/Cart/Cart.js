import React, { useState } from "react";
import "../../css/Cart/Cart.css";
import Checkout from "../CheckoutForm/Checkout";

import Fade from "react-reveal/Fade";

export default function Cart(props) {
  const [showForm, setShowForm] = useState(false);
  const [value, setValue] = useState("");

  const submitOrder = (e) => {
    e.preventDefault();
    // console.log(value);

    const order = {
      name: value.name,
      email: value.email,
    };
    console.log(order);
  };
  const handleChange = (e) => {
    // console.log(e.target.name);

    setValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="cart-wrapper">
      <div className="cart-title">
        {props.cartItems.length === 0 ? (
          "Empty Cart"
        ) : (
          <p>There is {props.cartItems.length} Products on cart</p>
        )}
      </div>
      <Fade bottom cascade>
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
      </Fade>
      {props.cartItems.length !== 0 && (
        <div className="cart-footer">
          <div className="total1">
            Total1 : $
            {props.cartItems.reduce((acc, p) => {
              return acc + p.price;
            }, 0)}
          </div>
          <button onClick={() => setShowForm(true)}>select products</button>
        </div>
      )}

      {/* // Todo: checkout form */}
      <Checkout
        showForm={showForm}
        submitOrder={submitOrder}
        setShowForm={setShowForm}
        handleChange={handleChange}
      />
    </div>
  );
}
