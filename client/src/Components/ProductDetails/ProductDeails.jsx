import React, { useState } from "react";
import "./ProductDetails.css";

export const ProductDeails = (props) => {
  const prod = {
    id: 1,
    name: "Dove Deeply Nourishing Body Wash",
    description:
      "Who doesn’t like having soft skin? We all want to keep our skin looking healthy and well cared for, and it’s much easier to make that a regular part of your routine if you’ve found a moisturising shower gel. That’s the best way to feel confident that you’re nurturing your skin right from the start of your day. We know how you can do just that – with Dove Deeply Nourishing Body Wash. This moisturising body wash combines NutriumMoisture with mild cleansers to help your skin retain its natural moisture, leaving you with softer, smoother skin after just one shower.",
    ingredients:
      "Water, Cocamidopropyl Betaine, Sodium Laureth Sulfate, Sodium Cocoyl Glycinate, Perfume, Glycerin,Sodium Chloride, Sodium Hydroxide, Sodium Lauroyl Isethionate, Palmitic Acid, Stearic Acid, Acrylates/C10-C30 Alkyl Acrylate Crosspolymer, PPG-9, Styrene/Acrylates Copolymer, Lauric Acid, DMDM Hydantoin, BHT, Sodium Palmitate, Sodium Benzoate, Tetrasodium EDTA, Sodium Isethionate, Coconut Acid, Glycine, Sodium Stearate, Citric Acid, Sodium Palm Kernelate, Methylisothiazolinone, Zinc Oxide, Tetrasodium Etidronate, Alumina, Alpha Isomethyl Ionone,Butylphenyl Methylpropional,Hexyl Cinnamal, Limonene, Linalool,Citronellol,Coumarin, Geraniol,CI 77891",
    price: 359,
    strickthrough_price: 395,
    brand: "Dove",
    about_the_brand:
      "A personal care brand created by Dutch multinational in 1957, Dove is sold in more than 80 countries worldwide. Originally a soap-only brand, Dove now offers a wide range of products across the personal care market including soap, facial cleansers, deodorants and hair care",
    origin: "Made In India",
    name_of_mfg: "Hindustan Unilever LTD.",
    address_of_mfg:
      "Hindustan Unilever Ltd, Unilever House, B D Sawant Marg, Chakala Andheri East - 400144",
    image:
      "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/d/o/do10.jpg",
    weight: "800ml",
    how_to_use:
      "Pour a quarter-sized drop of Dove body wash onto a loofah or pouf and work it into a lather, Gently massage yourself all over, rinse well.",
    review: "3.5",
    category: "",
    sub_category: "",
    offer: "10%",
  };

  const [isActive1, setIsActive1] = useState(true);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isDeliver, setIsDeliver] = useState(false);

  return (
    <>
      <div className="mainbody">
        <div class="productinfo">
          <div className="imgDiv">
            <img src={prod.image} alt="" />
          </div>
          <div className="details">
            <h3 style={{ fontSize: "25px" }}>
              {prod.name}
              <span style={{ fontWeight: "200" }}> ( {prod.weight} )</span>
            </h3>
            <p
              style={{
                color: "#dd0285",
                margin: "20px auto",
              }}
            >
              Review : {prod.review}{" "}
              <span
                style={{ color: "#f0b43e" }}
                class="fa-solid fa-star"
              ></span>{" "}
              | Add Your Review
            </p>
            <p
              style={{
                color: "#dd0285",
                margin: "20px auto",
              }}
            >
              <span class="fa-solid fa-check"></span> In Stock
            </p>
            <div className="prod_priceDiv">
              {" "}
              <div className="firstPrice">
                <span class="fa-solid fa-indian-rupee-sign"></span>{" "}
                {prod.strickthrough_price}
              </div>
              <div className="newPrice">
                <span class="fa-solid fa-indian-rupee-sign"></span> {prod.price}
              </div>
              <p>{prod.offer} off</p>
              <div>(Inclusive of all taxes)</div>
            </div>
            <div className="brand">Brand : {prod.brand}</div>
            <div className="addQty">
              Qty <input type="number" defaultValue="1" min="1" max="5" />{" "}
              <button className="addCart">
                <span class="fa-solid fa-basket-shopping"></span> Add to cart
              </button>
              <button className="wishList_btn">
                <span class="fa-solid fa-heart"></span>
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
                  <span class="fa-solid fa-bookmark"></span>
                </div>
                100% GENUINE PRODUCT
              </div>
              <div>
                <div>
                  <span class="fa-solid fa-arrow-rotate-left"></span>
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
                <div style={{ fontWeight: "900" }}>{isActive1 ? "-" : "+"}</div>
              </div>
              {isActive1 && (
                <div className="accordion-content">
                  {prod.description}
                  <div style={{ margin: "10px 0" }}>
                    <p>
                      {" "}
                      <span style={{ color: "black", fontWeight: "600" }}>
                        Ingredients :{" "}
                      </span>
                      {prod.ingredients}
                    </p>
                  </div>
                  <div style={{ margin: "10px 0" }}>
                    <p>
                      {" "}
                      <span style={{ color: "black", fontWeight: "600" }}>
                        MRP :{" "}
                      </span>
                      {prod.price}
                    </p>
                  </div>
                  <div style={{ margin: "10px 0" }}>
                    <p>
                      {" "}
                      <span style={{ color: "black", fontWeight: "600" }}>
                        Origin :{" "}
                      </span>
                      {prod.origin}
                    </p>
                  </div>
                  <div style={{ margin: "10px 0" }}>
                    <p>
                      {" "}
                      <span style={{ color: "black", fontWeight: "600" }}>
                        About the Brand :{" "}
                      </span>
                      {prod.about_the_brand}
                    </p>
                  </div>
                  <div style={{ margin: "10px 0" }}>
                    <p>
                      {" "}
                      <span style={{ color: "black", fontWeight: "600" }}>
                        Name Of Mfg / Importer / Brand :{" "}
                      </span>
                      {prod.name_of_mfg}
                    </p>
                  </div>
                  <div style={{ margin: "10px 0" }}>
                    <p>
                      {" "}
                      <span style={{ color: "black", fontWeight: "600" }}>
                        Address Of Mfg / Importer / Brand :{" "}
                      </span>
                      {prod.address_of_mfg}
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
                <div style={{ fontWeight: "900" }}>{isActive2 ? "-" : "+"}</div>
              </div>
              {isActive2 && (
                <div className="accordion-content">
                  <div
                    style={{
                      borderBottom: "1px solid lightgray",
                      display: "flex",
                      gap: "200px",
                      padding: "10px 30px",
                      textAlign: "start",
                    }}
                  >
                    <div> Type</div>
                    <div> All Type</div>
                  </div>
                  <div
                    style={{
                      borderBottom: "1px solid lightgray",
                      display: "flex",
                      gap: "200px",
                      padding: "10px 30px",
                      textAlign: "start",
                    }}
                  >
                    <div>Brand</div>
                    <div> {prod.brand}</div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "200px",
                      padding: "10px 30px",
                      textAlign: "start",
                    }}
                  >
                    <div>Weight</div>
                    <div>{prod.weight}</div>
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
                <div style={{ fontWeight: "900" }}>{isActive3 ? "-" : "+"}</div>
              </div>
              {isActive3 && (
                <div className="accordion-content">{prod.how_to_use}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
