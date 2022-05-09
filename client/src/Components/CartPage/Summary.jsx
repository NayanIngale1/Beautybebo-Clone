import './CartPage.css';
// import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../../context/productContext';

export const Summary = () => {
  const [estimate, setEstimate] = useState(false);
  const [coupon, setCoupon] = useState(false);
  const [cartArr,setCartArr]=useState();
  const {handleCartValue}=useContext(ProductContext)
  const {cart} =useContext(ProductContext);
  const {cartValue}=useContext(ProductContext)
  const {totalCart}=useContext(ProductContext)
  var sum=0;
  useEffect(()=>{
    if(cartValue==false){
      setCartArr(totalCart)
      handleCartValue(true)
    }
  })
  const handleEstimate = () => {
    setEstimate(!estimate);
  };
  const handleCoupon = () => {
    setCoupon(!coupon);
  };
  
  console.log(totalCart)
  for(var i=0;i<totalCart.length;i++){
    sum+=totalCart[i].price
  }
  return (
    <div id="summary">
      <div id="top">
        <p id="summary_heading">SUMMARY</p>
        <div id="ESTIMATE_SHIPPING" onClick={handleEstimate}>
          ESTIMATE SHIPPING AND TAX{' '}
          {/* {estimate ? <IoIosArrowUp /> : <IoIosArrowDown />} */}
        </div>
        {estimate ? (
          <>
            <div id="enter_destination">
              Enter your destination to get a shipping estimate.
            </div>
            <div id="country_div">Country</div>
            <select name="country" id="country">
              <option value="India">India</option>
            </select>
            <div id="state_div">State</div>
            <select name="state" id="state">
              <option value="default">
                Please select a region,state or province
              </option>
              <option value="">Andaman & Nicobar Islands</option>
              <option value="">Andhra Pradesh</option>
              <option value="">Arunachal Pradesh</option>
              <option value="">Assam</option>
              <option value="">Bihar</option>
              <option value="">Chhattisgarh</option>
              <option value="">Dadra and Nagar Haveli</option>
              <option value="">Daman and Diu</option>
              <option value="">Delhi</option>
              <option value="">Goa</option>
              <option value="">Gujarat</option>
              <option value="">Haryana</option>
              <option value="">Himachal Pradesh</option>
              <option value="">Jharkhand</option>
              <option value="">Karnataka</option>
              <option value="">Kerala</option>
              <option value="">Lakshadweep</option>
              <option value="">Madhya Pradesh</option>
              <option value="">Maharashtra</option>
              <option value="">Manipur</option>
              <option value="">Meghalaya</option>
              <option value="">Mizoram</option>
              <option value="">Nagaland</option>
              <option value="">Odisha</option>
              <option value="">Puducherry</option>
              <option value="">Punjab</option>
              <option value="">Rajasthan</option>
              <option value="">Sikkim</option>
              <option value="">Tamil Nadu</option>
              <option value="">Telangana</option>
              <option value="">Tripura</option>
              <option value="">Uttar Pradesh</option>
              <option value="">Uttarakhand</option>
              <option value="">West Bengal</option>
            </select>
            <div id="postalCode_Div">Zip/Postal Code</div>
            <input type="Number" id="postCode" />
            <div id="best_way">
              <p>Best Way</p>
              <div id="best_way_input_div">
                <input type="radio" />
                <div>Max 7 Business days ₹0.00</div>
              </div>
            </div>
          </>
        ) : null}
        <div>
          <div id="subtotal_div">
            {totalCart.map((el)=>(
              <div>
                <div id="subtotal">Subtotal</div>
                <div id="subtotal_price">₹{sum}</div>
              </div>
            ))}

          </div>
          <div id="shipping_div">
            <div id="shipping">
              <span style={{ fontWeight: '600' }}>Shipping</span> (Best Way -
              Max 7 Business days)
            </div>
            <div id="shipping_price">₹0.00</div>
          </div>
          <div id="total_div">
            <div id="total">Order Total Incl. GST</div>
            <div id="total_price">₹{sum}</div>
          </div>
          <div id="apply_discount" onClick={handleCoupon}>
            {/* APPLY DISCOUNT CODE {coupon ? <IoIosArrowUp /> : <IoIosArrowDown />} */}
          </div>
          {coupon ? (
            <>
              <div id="Enter_discount">Enter discount code</div>
              <input
                type="text"
                placeholder="Enter discount code"
                id="Enter_discount_inpt"
              />
              <button id="apply_discount_btn">APPLY DISCOUNT</button>
            </>
          ) : null}
        </div>
      </div>
      <div id="PROCEED_DIV">
        <button>PROCEED TO CHECKOUT</button>
      </div>
    </div>
  );
};
