import React from "react";
import "./ProductCard.css";

export const ProductCard = (props) => {
  const { prod } = props;
  // console.log("prod:", prod);

  return (
    <>
      <div className="prod_card">
        <div className="imgDiv">
          <img src={prod.image} alt="" />
        </div>
        <div className="prod_infoDiv">
          <div className="prod_titleDiv">{prod.name}</div>
          <div className="prod_reviewDiv">
            {" "}
            Review : {prod.review}{" "}
            <span style={{ color: "#f0b43e" }} class="fa-solid fa-star"></span>
          </div>
          <div className="prod_cardPriceDiv">
            <div className="firstPrice">
              <span class="fa-solid fa-indian-rupee-sign"></span>{" "}
              {prod.strickthrough_price}
            </div>
            <div className="newPrice">
              <span class="fa-solid fa-indian-rupee-sign"></span> {prod.price}
            </div>
            <p>{prod.offer} off</p>
          </div>
          <div className="prod_cardButtonDiv">
            <button className="card_addCart">
              <span class="fa-solid fa-basket-shopping"></span> Add to cart
            </button>
            <button className="card_wishList_btn">
              <span class="fa-solid fa-heart"></span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
