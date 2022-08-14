import React from "react";
import { useSelector } from "react-redux/es/exports";
import $ from "jquery";
import "../Styles/cart.css";
const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);

  const calTotalQuantity = (cartItems) => {
    return cartItems.length;
  };
  const calTotalPrice = (cartItems) => {
    let priceAsNumber = [];
    cartItems.forEach((item) => {
      priceAsNumber.push(item.price.match(/\d+/g) * 1);
    });
    console.log(priceAsNumber);

    const sum = priceAsNumber.reduce((accumulator, value) => {
      return accumulator + value;
    }, 0);
    return sum;
  };

  return (
    <div className="cart-page">
      <div className="summary-side">
        <h1>Summary</h1>
        <div className="field">
          <span className="field-name">المجموع الكورسات</span>
          <span className="field-value">{calTotalQuantity(cartItems)}</span>
        </div>
        <div className="field">
          <span className="field-name">المبلغ الكلي</span>
          <span className="field-value">{calTotalPrice(cartItems)} ريال</span>
        </div>
        <div className="bank-cart">
          <h2>طريقة السداد عن طريق تحويل لهذا الحساب</h2>
          <img
            src="https://d33wubrfki0l68.cloudfront.net/2ed3e331f19ca60a93a9f67e7040447b07a49cfe/5a0e9/static/ad0dee105e0400c1354f425a8f55bc44/c9f12/prime.png"
            alt=""
            className="bank-cart-img"
          />
        </div>
      </div>
      <div className="course-side">
        <div className="item-container">
          {cartItems.length > 0 &&
            cartItems.map((item, i) => (
              <div className="cart-item" key={i}>
                <img src={item.imgurl} alt="" className="item-image" />
                <div className="item-info">
                  <span className="item-name">{item.name}</span>
                  <span className="item-category">{item.category}</span>
                  <span className="item-descaription">{item.descaription}</span>
                  <span className="item-price">{item.price}</span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
