import React, { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
import "./ProductsPage.css";

export const ProductsPage = () => {
  const [opencategory, setOpencategory] = useState(false);
  const [openskintype, setOpenskintype] = useState(false);
  const [openprice, setOpenprice] = useState(false);
  const [openbrand, setOpenbrand] = useState(false);
  //   const [openbrand, setOpenbrand] = useState(false);
  const [prodData, setProdData] = useState([]);
  const [prodloading, setProdloading] = useState(true);

  useEffect(() => {
    getProdData();
    setTimeout(() => {
      setProdloading(false);
    }, 1300);
  }, []);

  const getProdData = () => {
    fetch("  http://localhost:8080/data")
      .then((res) => res.json())
      .then((res) => {
        setProdData(res);
        // console.log("res:", res);
      });
  };
  console.log("prodData:", prodData);
  return (
    <>
      <div className="products_mainbody">
        <div className="praducts_filterDiv">
          <div className="products_filters">
            <div className="prod_accordion">
              <div className="prod_accordion-item">
                <div
                  className="prod_accordion-title"
                  onClick={() => setOpencategory(!opencategory)}
                >
                  <div>CATEGORY</div>
                  <div style={{ fontWeight: "900" }}>
                    {opencategory ? "-" : "+"}
                  </div>
                </div>
                {opencategory && (
                  <div className="prod_accordion-content">Category</div>
                )}
              </div>
            </div>
          </div>
          <div className="products_filters">
            <p
              style={{
                padding: "10px 10px 0 10px",
                borderBottom: "1px solid gray",
              }}
            >
              SHOP BY
            </p>
            <div className="prod_accordion">
              <div className="prod_accordion-item">
                <div
                  className="prod_accordion-title"
                  onClick={() => setOpenskintype(!openskintype)}
                >
                  <div>SKIN TYPE</div>
                  <div style={{ fontWeight: "900" }}>
                    {openskintype ? "-" : "+"}
                  </div>
                </div>
                {openskintype && (
                  <div className="prod_accordion-content">
                    <label>
                      <input type="checkbox" name="" id="" />
                      Combination
                    </label>
                    <label>
                      <input type="checkbox" name="" id="" />
                      Dry
                    </label>
                    <label>
                      <input type="checkbox" name="" id="" />
                      Normal
                    </label>
                    <label>
                      <input type="checkbox" name="" id="" />
                      Oily
                    </label>
                    <label>
                      <input type="checkbox" name="" id="" />
                      Sensitive
                    </label>
                    <label>
                      <input type="checkbox" name="" id="" />
                      All Skin Type
                    </label>
                  </div>
                )}
              </div>
            </div>
            <div className="prod_accordion">
              <div className="prod_accordion-item">
                <div
                  className="prod_accordion-title"
                  onClick={() => setOpenprice(!openprice)}
                >
                  <div>PRICE</div>
                  <div style={{ fontWeight: "900" }}>
                    {openprice ? "-" : "+"}
                  </div>
                </div>
                {openprice && (
                  <div className="prod_accordion-content">
                    <label>
                      <input type="checkbox" name="" id="" />
                      Below {"  "}
                      <span class="fa-solid fa-indian-rupee-sign"></span>
                      1,000.00
                    </label>
                    <label>
                      <input type="checkbox" name="" id="" />
                      <span class="fa-solid fa-indian-rupee-sign"></span>
                      1,000.00 -{" "}
                      <span class="fa-solid fa-indian-rupee-sign"></span>
                      2,000.00
                    </label>
                    <label>
                      <input type="checkbox" name="" id="" />
                      <span class="fa-solid fa-indian-rupee-sign"></span>
                      2,000.00 -{" "}
                      <span class="fa-solid fa-indian-rupee-sign"></span>
                      3,000.00
                    </label>
                    <label>
                      <input type="checkbox" name="" id="" />
                      <span class="fa-solid fa-indian-rupee-sign"></span>
                      3,000.00 and Above
                    </label>
                  </div>
                )}
              </div>
            </div>
            <div className="prod_accordion">
              <div className="prod_accordion-item">
                <div
                  className="prod_accordion-title"
                  onClick={() => setOpenbrand(!openbrand)}
                >
                  <div>BRAND</div>
                  <div style={{ fontWeight: "900" }}>
                    {openbrand ? "-" : "+"}
                  </div>
                </div>
                {openbrand && (
                  <div className="prod_accordion-content">
                    <label>
                      <input type="checkbox" name="" id="" />
                      Brand
                    </label>
                    <label>
                      <input type="checkbox" name="" id="" />
                      Brand
                    </label>
                    <label>
                      <input type="checkbox" name="" id="" />
                      Brand
                    </label>
                    <label>
                      <input type="checkbox" name="" id="" />
                      Brand
                    </label>
                    <label>
                      <input type="checkbox" name="" id="" />
                      Brand
                    </label>
                    <label>
                      <input type="checkbox" name="" id="" />
                      Brand
                    </label>
                    <label>
                      <input type="checkbox" name="" id="" />
                      Brand
                    </label>
                    <label>
                      <input type="checkbox" name="" id="" />
                      Brand
                    </label>
                    <label>
                      <input type="checkbox" name="" id="" />
                      Brand
                    </label>
                    <label>
                      <input type="checkbox" name="" id="" />
                      Brand
                    </label>
                    <label>
                      <input type="checkbox" name="" id="" />
                      Brand
                    </label>
                    <label>
                      <input type="checkbox" name="" id="" />
                      Brand
                    </label>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="addvertisImg">
            <img
              src="https://www.beautybebo.com/pub/media/free-delivery.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="products_cardsDiv">
          <div className="products_cardsDiv_top">
            <p>CATEGORY</p>
            <div className="sort_and_pagination">
              <div className="sort_div">
                Sort:{" "}
                <select name="sort" id="">
                  <option value="id">Position</option>
                  <option value="name">Product Name</option>
                  <option value="price_asc">Price : Low To High</option>
                  <option value="price_des">Price : High To Low</option>
                </select>
              </div>
              <div className="pagination_div">
                <button className="active">1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>
                  <span class="fa-solid fa-angle-right"></span>
                </button>
              </div>
            </div>
          </div>
          {prodloading ? (
            <div
              style={{
                fontWeight: "900",
                fontSize: "30px",
                height: "500px",
                width: "100 %",
                textAlign: "center",
                margin: "20px auto",
                color: "#dd0285",
              }}
            >
              Loading....
            </div>
          ) : (
            <div className="products_grid">
              {prodData.map((e) => (
                <ProductCard prod={e} />
              ))}
            </div>
          )}
          <div className="sort_and_pagination">
            <div className="sort_div">
              Sort:{" "}
              <select name="sort" id="">
                <option value="id">Position</option>
                <option value="name">Product Name</option>
                <option value="price_asc">Price : Low To High</option>
                <option value="price_des">Price : High To Low</option>
              </select>
            </div>
            <div className="pagination_div">
              <button className="active">1</button>
              <button>2</button>
              <button>3</button>
              <button>4</button>
              <button>5</button>
              <button>
                <span class="fa-solid fa-angle-right"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
