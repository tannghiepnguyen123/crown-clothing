import React from "react";
import "./cartItem.scss";

const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="item-detail">
        <div className="name">{name}</div>
        <div className="price">
          {quantity} x ${price}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
