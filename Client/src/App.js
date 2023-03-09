// import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
// import { words } from "./words";

import data from "./data.json";
import { useState } from "react";
import Products from "./Components/Products/Products";
import Filter from "./Components/Filter/Filter";

function App() {
  const [products, setProducts] = useState(data);
  const [sort, setSort] = useState("");
  const [size, setSize] = useState("");

  const handleFilterBySize = (e) => {
    setSize(e.target.value);
    // handle All
    if (e.target.value == "ALL") {
      setProducts(data);
    } else {
      // make filter in size
      let productsClone = [...products];
      let newProducts = productsClone.filter(
        (p) => p.sizes.indexOf(e.target.value) != -1
      );
      setProducts(newProducts);
    }
  };

  const handleFilterByOrder = (e) => {
    let order = e.target.value;
    setSort(order);
    let productsClone = [...products];
    let newProducts = productsClone.sort(function (a, b) {
      if (order == "lowest") {
        return a.price - b.price;
      } else if (order == "highest") {
        return b.price - a.price;
      } else {
        return a.id < b.id ? 1 : -1;
      }
    });
    setProducts(newProducts);
  };

  return (
    <div className="layout">
      <Header />
      <main>
        <div className="wrapper">
          <Products products={products} />
          <Filter
            size={size}
            sort={sort}
            handleFilterByOrder={handleFilterByOrder}
            handleFilterBySize={handleFilterBySize}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
