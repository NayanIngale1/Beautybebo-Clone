import React from 'react';
import { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../../context/productContext';
import { useNavigate } from 'react-router-dom';
import './ProductCard.css';

export const ProductCard = (props) => {
  const { handleCart } = useContext(ProductContext);
  const { handleCartValue } = useContext(ProductContext);
  const { prod } = props;
  // console.log("prod:", prod);
  const navigate = useNavigate();
  return (
    <>
      <div
        className="prod_card"
        key={prod._id}
        onClick={() => {
          navigate(`/details/${prod._id}`);
          // console.log("prod.id:", prod._id);
        }}
      >
        <div className="cardimgDiv">
          <img src={prod.image} alt="" />
        </div>
        <div className="prod_infoDiv">
          <div className="prod_titleDiv">{prod.name}</div>
          <div className="prod_reviewDiv">
            {' '}
            Review : {prod.review}{' '}
            <span
              style={{ color: '#f0b43e' }}
              className="fa-solid fa-star"
            ></span>
          </div>
          <div className="prod_cardPriceDiv">
            {prod.strickthrough_price ? (
              <div className="firstPrice">
                <span className="fa-solid fa-indian-rupee-sign"></span>{' '}
                {prod.strickthrough_price}
              </div>
            ) : null}
            <div className="newPrice">
              <span className="fa-solid fa-indian-rupee-sign"></span>{' '}
              {prod.price}
            </div>
            {prod.offer ? <p>{prod.offer} off</p> : null}
          </div>
          <div className="prod_cardButtonDiv">
            <button
              className="card_addCart"
              onClick={() => {
                handleCart(prod);
              }}
            >
              <span className="fa-solid fa-basket-shopping"></span> Add to cart
            </button>
            <button className="card_wishList_btn">
              <span className="fa-solid fa-heart"></span>
            </button>
          </div>
        </div>
        <div className="hoverEye">
          <span className="fa-solid fa-eye"></span>
        </div>
      </div>
    </>
  );
};
