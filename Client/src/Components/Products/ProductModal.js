import React from "react";
import Modal from "react-modal";
export default function ProductModal(props) {
  const { product, closeModel } = props;
  return (
    <Modal isOpen={product}>
      <span className="close-icon" onClick={closeModel}>
        &times;
      </span>
      <div className="product-info">
        <img src={product.imageUrl} alt={product.title} />
        <p>{product.title}</p>
        <p>{product.desc}</p>
        <p>${product.price}</p>
      </div>
    </Modal>
  );
}
