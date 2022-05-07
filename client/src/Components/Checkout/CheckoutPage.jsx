import React, { useState } from 'react';
import './Checkout.css';
import { useDispatch, useSelector } from 'react-redux';
import { addCheckoutDetails } from '../../Redux/CheckoutDetails/action';

export const CheckoutPage = () => {
  const [shipingAddress, setShipingAddress] = useState({});
  const dispatch = useDispatch();

  const checkoutAddress = useSelector((store) => store.checkoutAddress);

  const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    // console.log(shipingAddress);

    dispatch(addCheckoutDetails(shipingAddress));
  };
  // console.log("checkoutAddress", checkoutAddress);

  const handleCheckoutChange = (e) => {
    setShipingAddress({
      ...shipingAddress,
      county: 'India',
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="allPage">
      <div className="checkout_mainbody">
        <div className="checkoutFormDiv">
          <h2 className="checkout_heading">Shipping Address</h2>

          <form
            className="checkout_form"
            onSubmit={(e) => handleCheckoutSubmit(e)}
          >
            <label>
              <p className="checkout_formLabel">
                Email Address <span>*</span>
              </p>
              <input
                type="email"
                className="checkout_input"
                name="email"
                onChange={(e) => handleCheckoutChange(e)}
              />
            </label>
            <label>
              <p className="checkout_formLabel">
                First Name <span>*</span>
              </p>
              <input
                type="text"
                className="checkout_input"
                name="first_name"
                onChange={(e) => handleCheckoutChange(e)}
              />
            </label>
            <label>
              <p className="checkout_formLabel">
                Last Name <span>*</span>
              </p>
              <input
                type="text"
                className="checkout_input"
                name="last_name"
                onChange={(e) => handleCheckoutChange(e)}
              />
            </label>
            <label>
              <p className="checkout_formLabel">
                Street Address <span>*</span>
              </p>
              <input
                type="text"
                className="checkout_input"
                name="street_address"
                onChange={(e) => handleCheckoutChange(e)}
              />
            </label>
            <label>
              <p className="checkout_formLabel">
                City <span>*</span>
              </p>
              <input
                type="text"
                className="checkout_input"
                name="city"
                onChange={(e) => handleCheckoutChange(e)}
              />
            </label>
            <label>
              <p className="checkout_formLabel">
                State <span>*</span>
              </p>
              <input
                type="text"
                className="checkout_input"
                name="state"
                onChange={(e) => handleCheckoutChange(e)}
              />
            </label>
            <label>
              <p className="checkout_formLabel">
                Zip/Postal Code <span>*</span>
              </p>
              <input
                type="text"
                className="checkout_input"
                name="zipcode"
                onChange={(e) => handleCheckoutChange(e)}
              />
            </label>
            <label>
              <p className="checkout_formLabel">
                Country <span>*</span>
              </p>
              <select
                name="county"
                defaultValue="India"
                className="checkout_input"
                onChange={(e) => handleCheckoutChange(e)}
              >
                <option value="India">India</option>
              </select>
            </label>
            <label>
              <p className="checkout_formLabel">
                Phone Number <span>*</span>
              </p>
              <input
                type="number"
                className="checkout_input"
                name="phone"
                onChange={(e) => handleCheckoutChange(e)}
              />
            </label>
            <div className="checkout_delivey">
              <h2>Delivery Charges</h2>
              <div className="checkout_delivey_div">
                <label>
                  <input type="radio" defaultChecked />
                  <span className="fa-solid fa-indian-rupee-sign"></span>0.00
                </label>
                <p>Max 7 Business Days</p>
              </div>
            </div>
            <div>

            <input type="submit" className="checkout_nextBtn" value="Next" />
            </div>

          </form>
        </div>
        <div className="checkout-orderSummary">
          <h2>ORDER SUMMARY</h2>
          <p className="checkout_cartTotal">{'2'} Items in Cart</p>
          <div className="checkout_cartItem">
            <div className="checkout_cartItem_imgDiv">
              <img
                src="https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/i/m/image1_600x.jpg"
                alt=""
              />
            </div>
            <div className="checkout_cartItem_info">
              <p className="cartItem_name">ponds face powder</p>
              <p className="cartItem_total">
                {' '}
                <span className="fa-solid fa-indian-rupee-sign"></span> 20
              </p>
              <p className="cartItem_qty">Qty :1</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
