// import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
// import { words } from "./words";

import data from "./data.json";
import { useEffect, useState } from "react";
import Products from "./Components/Products/Products";
import Filter from "./Components/Filter/Filter";
import Cart from "./Components/Cart/Cart";

import { Provider } from "react-redux";
import store from "./Store/Store";

function App() {
  const [products, setProducts] = useState(data);
  const [sort, setSort] = useState("");
  const [size, setSize] = useState("");
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );

  const handleFilterBySize = (e) => {
    setSize(e.target.value);
    // handle All
    if (e.target.value === "ALL") {
      setProducts(data);
    } else {
      // make filter in size
      let productsClone = [...products];
      let newProducts = productsClone.filter(
        (p) => p.sizes.indexOf(e.target.value) !== -1
      );
      console.log("newProducts", newProducts);
      setProducts(newProducts);
    }
  };

  const handleFilterByOrder = (e) => {
    let order = e.target.value;
    setSort(order);
    let productsClone = [...products];
    let newProducts = productsClone.sort(function (a, b) {
      if (order === "lowest") {
        return a.price - b.price;
      } else if (order === "highest") {
        return b.price - a.price;
      } else {
        return a.id < b.id ? 1 : -1;
      }
    });
    setProducts(newProducts);
  };

  const addToCart = (product) => {
    const cartItemsClone = [...cartItems];
    var isProductExist = false;
    cartItemsClone.forEach((p) => {
      if (p.id === product.id) {
        p.qty++;
        isProductExist = true;
      }
    });
    if (!isProductExist) {
      cartItemsClone.push({ ...product, qty: 1 });
    }
    setCartItems(cartItemsClone);
  };

  // localstorge
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const removeFromeCart = (product) => {
    const cartItemsClone = [...cartItems];
    setCartItems(cartItemsClone.filter((p) => p.id !== product.id));
  };

  return (
    <Provider store={store}>
      <div className="layout">
        <Header />
        <main>
          <div className="wrapper">
            <Products products={products} addToCart={addToCart} />
            <Filter
              producsNumber={products.length}
              size={size}
              sort={sort}
              handleFilterByOrder={handleFilterByOrder}
              handleFilterBySize={handleFilterBySize}
            />
          </div>
          <Cart cartItems={cartItems} removeFromeCart={removeFromeCart} />
        </main>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
