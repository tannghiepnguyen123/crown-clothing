import React, { useContext } from "react";
import "./cardDropdown.scss";
import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";
import { CartContext } from "../../context/cart";
import { useNavigate } from "react-router-dom";

const CardDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={goToCheckoutHandler}>Checkout</Button>
    </div>
  );
};

export default CardDropdown;
