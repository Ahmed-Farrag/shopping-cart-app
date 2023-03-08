// import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
// import { words } from "./words";

import data from "./data.json";
import { useState } from "react";
import Products from "./Components/Products/Products";

function App() {
  const [products, setProducts] = useState(data);
  return (
    <div className="layout">
      <Header />
      <main>
        <div className="wrapper">
          <Products products={products} />
          <div className="filter-wrapper">Filter</div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
