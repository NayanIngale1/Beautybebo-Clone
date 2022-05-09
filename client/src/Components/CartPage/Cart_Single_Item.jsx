import './CartPage.css';
import { useContext, useEffect, useState } from 'react';
import { CartBottomDiv } from './Cart_Item_div';
import { ProductContext } from '../../context/productContext';
import { Button } from 'react-bootstrap';
export const CartSingleItem = () => {
  const [itemNo, setItemNo] = useState(1);
  const [cartArr, setCartArr] = useState();
  const { handleCartValue } = useContext(ProductContext);
  const { cart } = useContext(ProductContext);
  const { cartValue } = useContext(ProductContext);
  const { totalCart } = useContext(ProductContext);
  var sum = 0;
  useEffect(() => {
    if (cartValue == false) {
      setCartArr(totalCart);
      handleCartValue(true);
    }
  });
  console.log(totalCart);
  return (
    <div className="Cart_Item_info">
      {totalCart.map((el) => (
        <div className="Upper_Content">
          <div className="image_title">
            <div className="Cart_Img_Div">
              <img src={el.image} alt="" />
            </div>
            <div className="Cart_Title_Div">{el.name}</div>
          </div>
          <div className="PriceHead">
            <div id="price_head">PRICE</div>
            <div id="qty_head">QTY</div>
            <div id="subtotal_head">SUBTOTAL</div>
          </div>
          <div className="CartPriceDiv">
            <div className="Cart_Price_Div">₹{el.price}</div>
            <div className="Cart_Qty_Div">
              <input
                onChange={(e) => setItemNo(e.target.value)}
                type="text"
                defaultValue={1}
              />
            </div>
            <div className="Cart_Subtotal_Div">₹{el.price * itemNo}</div>
          </div>
        </div>
      ))}

      <div className="Lower_Content">
        <button className="Cart_Edit_Button">EDIT</button>
        <button className="Cart_Remove_Item_Button">REMOVE ITEM</button>
      </div>
      <hr></hr>
      <CartBottomDiv></CartBottomDiv>
    </div>
  );
};
