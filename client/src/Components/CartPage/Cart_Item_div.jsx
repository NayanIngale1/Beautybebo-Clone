import "./CartPage.css"
export const CartTopDiv = () => {
    return (
        <div id="CartTopDiv">
            <div id="item_head">ITEM</div>
            <div id="PriceHead">
                <div id="price_head">PRICE</div>
                <div id="qty_head">QTY</div>
                <div id="subtotal_head">SUBTOTAL</div>
            </div>
        </div>
    )
}

export const CartBottomDiv = () => {
    return (
        <div id="CartBottomDiv">
            <button id="ContinueShoppingBottom">CONTINUE SHOPPING</button>
            <button id="UpdateShoppingCartBottom">UPDATE SHOPPING CART</button>
        </div>
    )
}