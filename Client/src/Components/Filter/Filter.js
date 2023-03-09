import React from "react";
import "../../css/Filter/Filter.css";
import Bounce from "react-reveal/Bounce";

export default function Filter(props) {
  return (
    <div className="filter-wrapper">
      <h2 className="filter-title">Filter</h2>
      <div className="num-of-products">
        Number of Products {props.producsNumber}
      </div>
      <div className="filter-by-size">
        <span>Filter</span>
        <select
          value={props.size}
          className="filter-select"
          onChange={props.handleFilterBySize}
        >
          <option value="ALL">All</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
      </div>
      <div className="filter-by-size">
        <span>Order</span>
        <select
          className="filter-select"
          value={props.sort}
          onChange={props.handleFilterByOrder}
        >
          <option value="latest">Latest</option>
          <option value="lowest">Lowest</option>
          <option value="highest">Highest</option>
        </select>
      </div>
    </div>
  );
}
