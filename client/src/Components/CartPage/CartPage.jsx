import { CartSingleItem } from './Cart_Single_Item';
import { CartTopDiv, CartBottomDiv } from './Cart_Item_div';
import { Summary } from './Summary';

export const CartPage = () => {
  return (
    <div id="CartPage">
      <div id="CartContent">
        <CartTopDiv></CartTopDiv>
        <CartSingleItem></CartSingleItem>
      </div>
      <Summary></Summary>
    </div>
  );
};
