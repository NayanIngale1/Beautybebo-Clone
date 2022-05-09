import React from 'react';
import { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../../context/productContext';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';

export const ProductDeails = (props) => {
  const { handleCart } = useContext(ProductContext);
  const { handleCartValue } = useContext(ProductContext);
  const { id } = useParams();
  // console.log("id:", id);

  const [product, setProduct] = useState({});
  const [isloading, setIsLoading] = useState(true);
  // console.log("product:", product);

  useEffect(() => {
    fetch(`https://beautibebo.herokuapp.com/products/${id}`)
      .then((res) => res.json())
      .then((res) => setProduct(res))
      .then(() =>
        setTimeout(() => {
          setIsLoading(false);
        }, 1000)
      );
  }, []);

  const [isActive1, setIsActive1] = useState(true);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isDeliver, setIsDeliver] = useState(false);

  return isloading ? (
    <div
      style={{
        fontSize: '30px',
        margin: '100px auto',
        fontWeight: '500',
        color: '#f331a5',
        textAlign: 'center',
      }}
    >
      <h1>Loading....</h1>
    </div>
  ) : (
    <>
      <div className="mainbody">
        <div className="productinfo">
          <div className="imgDiv">
            <img src={product.image} alt="" />
          </div>
          <div className="details">
            <h3 style={{ fontSize: '25px' }}>
              {product.name}
              <span style={{ fontWeight: '200' }}> ( {product.Weight} )</span>
            </h3>
            <p
              style={{
                color: '#dd0285',
                margin: '20px auto',
              }}
            >
              Review : {product.review}{' '}
              <span
                style={{ color: '#f0b43e' }}
                className="fa-solid fa-star"
              ></span>{' '}
              | Add Your Review
            </p>
            <p
              style={{
                color: '#dd0285',
                margin: '20px auto',
              }}
            >
              <span className="fa-solid fa-check"></span> In Stock
            </p>
            <div className="prod_priceDiv">
              {' '}
              <div className="firstPrice">
                <span className="fa-solid fa-indian-rupee-sign"></span>{' '}
                {product.strickthrough_price}
              </div>
              <div className="newPrice">
                <span className="fa-solid fa-indian-rupee-sign"></span>{' '}
                {product.price}
              </div>
              <p>{product.offer} off</p>
              <div>(Inclusive of all taxes)</div>
            </div>
            <div className="brand">Brand : {product.brand}</div>
            <div className="addQty">
              Qty <input type="number" defaultValue="1" min="1" max="5" />{' '}
              <button
                className="addCart"
                onClick={() => {
                  handleCart(product);
                }}
              >
                <span className="fa-solid fa-basket-shopping"></span> Add to
                cart
              </button>
              <button className="wishList_btn">
                <span className="fa-solid fa-heart"></span>
              </button>
            </div>
            <div className="deliveryCheck">
              <p>Check Delivery</p>
              <div>
                <input type="number" placeholder="Zipcode" />
                <button onClick={() => setIsDeliver(true)}>Check</button>
                {isDeliver && <p className="deliver"> Delivery Available</p>}
              </div>
            </div>
            <div className="infoProd">
              <div>
                <div>
                  <span className="fa-solid fa-bookmark"></span>
                </div>
                100% GENUINE PRODUCT
              </div>
              <div>
                <div>
                  <span className="fa-solid fa-arrow-rotate-left"></span>
                </div>
                EASY RETURN POLICY
              </div>
            </div>
          </div>
        </div>
        <div className="moreInfo">
          <div className="accordion">
            <div className="accordion-item">
              <div className="accordion-title">
                <div>Details</div>
                <div style={{ fontWeight: '900' }}>{isActive1 ? '-' : '+'}</div>
              </div>
              {isActive1 && (
                <div className="accordion-content">
                  {product.description}
                  <div style={{ margin: '10px 0' }}>
                    <p>
                      {' '}
                      <span style={{ color: 'black', fontWeight: '600' }}>
                        Ingredients :{' '}
                      </span>
                      {product.ingredients}
                    </p>
                  </div>
                  <div style={{ margin: '10px 0' }}>
                    <p>
                      {' '}
                      <span style={{ color: 'black', fontWeight: '600' }}>
                        MRP :{' '}
                      </span>
                      {product.price}
                    </p>
                  </div>
                  <div style={{ margin: '10px 0' }}>
                    <p>
                      {' '}
                      <span style={{ color: 'black', fontWeight: '600' }}>
                        Origin :{' '}
                      </span>
                      {product.origin}
                    </p>
                  </div>
                  <div style={{ margin: '10px 0' }}>
                    <p>
                      {' '}
                      <span style={{ color: 'black', fontWeight: '600' }}>
                        About the Brand :{' '}
                      </span>
                      {product.about_the_brand}
                    </p>
                  </div>
                  <div style={{ margin: '10px 0' }}>
                    <p>
                      {' '}
                      <span style={{ color: 'black', fontWeight: '600' }}>
                        Name Of Mfg / Importer / Brand :{' '}
                      </span>
                      {product.name_of_mfg}
                    </p>
                  </div>
                  <div style={{ margin: '10px 0' }}>
                    <p>
                      {' '}
                      <span style={{ color: 'black', fontWeight: '600' }}>
                        Address Of Mfg / Importer / Brand :{' '}
                      </span>
                      {product.address_of_mfg}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="accordion">
            <div className="accordion-item">
              <div
                className="accordion-title"
                onClick={() => setIsActive2(!isActive2)}
              >
                <div>More Information</div>
                <div style={{ fontWeight: '900' }}>{isActive2 ? '-' : '+'}</div>
              </div>
              {isActive2 && (
                <div className="accordion-content">
                  <div
                    style={{
                      borderBottom: '1px solid lightgray',
                      display: 'flex',
                      gap: '200px',
                      padding: '10px 30px',
                      textAlign: 'start',
                    }}
                  >
                    <div> Type</div>
                    <div> All Type</div>
                  </div>
                  <div
                    style={{
                      borderBottom: '1px solid lightgray',
                      display: 'flex',
                      gap: '200px',
                      padding: '10px 30px',
                      textAlign: 'start',
                    }}
                  >
                    <div>Brand</div>
                    <div> {product.brand}</div>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      gap: '200px',
                      padding: '10px 30px',
                      textAlign: 'start',
                    }}
                  >
                    <div>Weight</div>
                    <div>{product.Weight}</div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="accordion">
            <div className="accordion-item">
              <div
                className="accordion-title"
                onClick={() => setIsActive3(!isActive3)}
              >
                <div>How To Use</div>
                <div style={{ fontWeight: '900' }}>{isActive3 ? '-' : '+'}</div>
              </div>
              {isActive3 && (
                <div className="accordion-content">{product.how_to_use}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
