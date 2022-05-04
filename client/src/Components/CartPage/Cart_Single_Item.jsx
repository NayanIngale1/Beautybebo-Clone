import "./CartPage.css"
export const CartSingleItem = () => {
    return (
        <div className="Cart_Item_info">
            <div className="Upper_Content">
                <div className="Cart_Img_Div">
                    <img src="https://www.beautybebo.com/pub/media/catalog/product/cache/c9615af5e5a6f27d0b9239c1928d8610/5/4/54_2.jpg" alt="" />
                </div>
                <div className="Cart_Title_Div">FACES CANADA PEACHES N CREAM TINTED MOISTURIZER - LIGHT 01</div>
                <div className="CartPriceDiv">
                    <div className="Cart_Price_Div">₹539.00</div>
                    <div className="Cart_Qty_Div">1</div>
                    <div className="Cart_Subtotal_Div">₹539.00</div>
                </div>
            </div>
            <div className="Lower_Content">
                <button className="Cart_Edit_Button">EDIT</button>
                <button className="Cart_Remove_Item_Button">REMOVE ITEM</button>
            </div>
        </div>
    )
}