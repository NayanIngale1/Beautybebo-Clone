import React, { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
import "./ProductsPage.css";
import { Link, useNavigate, useParams } from "react-router-dom";

export const ProductsPage = () => {
  const [opencategory, setOpencategory] = useState(false);
  const [openskintype, setOpenskintype] = useState(false);
  const [openprice, setOpenprice] = useState(false);
  const [openbrand, setOpenbrand] = useState(false);
  //   const [openbrand, setOpenbrand] = useState(false);
  const [prodData, setProdData] = useState([]);
  const [prodloading, setProdloading] = useState(true);
  const [pageNum, setPageNum] = useState(1);
  const [filterKey, setFilterKey] = useState(null);

  const { type } = useParams();
  // console.log('type:', type)

  useEffect(() => {
    getProdData();
  }, [pageNum, type]);

  const getProdData = () => {
    fetch(
      `https://beautibebo.herokuapp.com/products/category/${type}?pagesize=9&pagenumber=${pageNum}`
    )
      .then((res) => res.json())
      .then((res) => {
        setProdData(res.product);
        // console.log("res:", res);
      })
      .then((res) =>
       
          setProdloading(false))
        
   
  };
  // console.log("prodData:", prodData);

  const handleOnSkinTypeChange = (value) => {
    fetch(
      `https://beautibebo.herokuapp.com/products/skin/${value}?pagesize=9&pagenumber=${pageNum}`
    )
      .then((res) => res.json())
      .then((res) => {
        setProdData(res.product);
        // console.log("res:", res);
      });
  };
  const handleOnBrandChange = (value) => {
    fetch(
      `https://beautibebo.herokuapp.com/products/brand/${value}?pagesize=9&pagenumber=${pageNum}`
    )
      .then((res) => res.json())
      .then((res) => {
        setProdData(res);
        // console.log("res:", res);
      });
  };

  const handleSort = (type) => {
    if (type == "id") {
      getProdData();
    } else if (type == "name") {
      const newData = [...prodData].sort((a, b) => {
        return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
      });
      setProdData(newData);
    } else if (type == "price_asc") {
      const newData = [...prodData].sort((a, b) => {
        return a.price > b.price ? 1 : a.price < b.price ? -1 : 0;
      });
      setProdData(newData);
    } else if (type == "price_dec") {
      const newData = [...prodData].sort((a, b) => {
        return a.price < b.price ? 1 : a.price > b.price ? -1 : 0;
      });
      setProdData(newData);
    }
  };

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
                  <>
                    <Link
                      to="/products/makeup"
                      className="linkTag"
                      onClick={() => {
                        setProdloading(true);
                        setPageNum(1);
                      }}
                    >
                      <div className="prod_accordion-content">Makeup</div>
                    </Link>
                    <Link
                      to="/products/skin"
                      className="linkTag"
                      onClick={() => {
                        setProdloading(true);
                        setPageNum(1);
                      }}
                    >
                      {" "}
                      <div className="prod_accordion-content">Skin</div>
                    </Link>
                    <Link
                      to="/products/hair"
                      className="linkTag"
                      onClick={() => {
                        setProdloading(true);
                        setPageNum(1);
                      }}
                    >
                      <div className="prod_accordion-content">Hair</div>
                    </Link>
                    <Link
                      to="/products/personal-care"
                      className="linkTag"
                      onClick={() => {
                        setProdloading(true);
                        setPageNum(1);
                      }}
                    >
                      <div className="prod_accordion-content">
                        Personal Care
                      </div>
                    </Link>
                    <Link
                      to="/products/momandbaby"
                      className="linkTag"
                      onClick={() => {
                        setProdloading(true);
                        setPageNum(1);
                      }}
                    >
                      <div className="prod_accordion-content">
                        Mom & Baby Care
                      </div>
                    </Link>
                    <Link
                      to="/products/fragrance"
                      className="linkTag"
                      onClick={() => {
                        setProdloading(true);
                        setPageNum(1);
                      }}
                    >
                      <div className="prod_accordion-content">Fragrance</div>
                    </Link>
                    <Link
                      to="/products/ayurveda"
                      className="linkTag"
                      onClick={() => {
                        setProdloading(true);
                        setPageNum(1);
                      }}
                    >
                      <div className="prod_accordion-content">Ayurveda</div>
                    </Link>
                  </>
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
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        value="Combination"
                        onChange={(e) => {
                          e.target.checked
                            ? handleOnSkinTypeChange(e.target.value)
                            : getProdData();
                        }}
                      />
                      Combination
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        value="Dry"
                        onChange={(e) => {
                          e.target.checked
                            ? handleOnSkinTypeChange(e.target.value)
                            : getProdData();
                        }}
                      />
                      Dry
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        value="Normal"
                        onChange={(e) => {
                          e.target.checked
                            ? handleOnSkinTypeChange(e.target.value)
                            : getProdData();
                        }}
                      />
                      Normal
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        value="Oily"
                        onChange={(e) => {
                          e.target.checked
                            ? handleOnSkinTypeChange(e.target.value)
                            : getProdData();
                        }}
                      />
                      Oily
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        value="Sensitive"
                        onChange={(e) => {
                          e.target.checked
                            ? handleOnSkinTypeChange(e.target.value)
                            : getProdData();
                        }}
                      />
                      Sensitive
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        value="All Skin Type"
                        onChange={(e) => {
                          e.target.checked
                            ? handleOnSkinTypeChange(e.target.value)
                            : getProdData();
                        }}
                      />
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
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        value="The Body Shop"
                        onChange={(e) => {
                          e.target.checked
                            ? handleOnBrandChange(e.target.value)
                            : getProdData();
                        }}
                      />
                      The Body Shop
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        value="L'Oreal Paris "
                        onChange={(e) => {
                          e.target.checked
                            ? handleOnBrandChange(e.target.value)
                            : getProdData();
                        }}
                      />
                      L'Oreal Paris
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        value="O3+"
                        onChange={(e) => {
                          e.target.checked
                            ? handleOnBrandChange(e.target.value)
                            : getProdData();
                        }}
                      />
                      O3+
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        value="Swiss Beauty"
                        onChange={(e) => {
                          e.target.checked
                            ? handleOnBrandChange(e.target.value)
                            : getProdData();
                        }}
                      />
                      Swiss Beauty
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        value="Colorbar"
                        onChange={(e) => {
                          e.target.checked
                            ? handleOnBrandChange(e.target.value)
                            : getProdData();
                        }}
                      />
                      Colorbar
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        value="Miss Claire"
                        onChange={(e) => {
                          e.target.checked
                            ? handleOnBrandChange(e.target.value)
                            : getProdData();
                        }}
                      />
                      Miss Claire
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        value="Faces Canada"
                        onChange={(e) => {
                          e.target.checked
                            ? handleOnBrandChange(e.target.value)
                            : getProdData();
                        }}
                      />
                      Faces Canada
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        value="Blue Heaven"
                        onChange={(e) => {
                          e.target.checked
                            ? handleOnBrandChange(e.target.value)
                            : getProdData();
                        }}
                      />
                      Blue Heaven
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        value="Mamaearth"
                        onChange={(e) => {
                          e.target.checked
                            ? handleOnBrandChange(e.target.value)
                            : getProdData();
                        }}
                      />
                      Mamaearth
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        value="NYX"
                        onChange={(e) => {
                          e.target.checked
                            ? handleOnBrandChange(e.target.value)
                            : getProdData();
                        }}
                      />
                      NYX
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        value="Beeone"
                        onChange={(e) => {
                          e.target.checked
                            ? handleOnBrandChange(e.target.value)
                            : getProdData();
                        }}
                      />
                      Beeone
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        value="Lakme"
                        onChange={(e) => {
                          e.target.checked
                            ? handleOnBrandChange(e.target.value)
                            : getProdData();
                        }}
                      />
                      Lakme
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
                <select
                  name="sort"
                  id=""
                  onChange={(e) => handleSort(e.target.value)}
                >
                  <option value="id">Position</option>
                  <option value="name">Product Name</option>
                  <option value="price_asc">Price : Low To High</option>
                  <option value="price_dec">Price : High To Low</option>
                </select>
              </div>
              <div className="pagination_div">
                <button
                  className={pageNum === 1 ? "active" : null}
                  onClick={() => {
                    setPageNum(1);
                    setProdloading(true);
                  }}
                >
                  1
                </button>
                <button
                  className={pageNum === 2 ? "active" : null}
                  onClick={() => {
                    setPageNum(2);
                    setProdloading(true);
                  }}
                >
                  2
                </button>
                <button
                  className={pageNum === 3 ? "active" : null}
                  onClick={() => {
                    setPageNum(3);
                    setProdloading(true);
                  }}
                >
                  3
                </button>
                <button
                  className={pageNum === 4 ? "active" : null}
                  onClick={() => {
                    setPageNum(4);
                    setProdloading(true);
                  }}
                >
                  4
                </button>
                <button
                  className={pageNum === 5 ? "active" : null}
                  onClick={() => {
                    setPageNum(5);
                    setProdloading(true);
                  }}
                >
                  5
                </button>
                <button
                  onClick={() => {
                    setPageNum(pageNum + 1);
                    setProdloading(true);
                  }}
                >
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
          ) : prodData.length !== 0 ? (
            <div className="products_grid">
              {prodData
                .filter((e) => (filterKey ? e.skin_type == filterKey : e))
                .map((e) => (
                  <ProductCard prod={e} />
                ))}
            </div>
          ) : (
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
              No More Products
            </div>
          )}
          <div className="sort_and_pagination">
            <div className="sort_div">
              Sort:{" "}
              <select
                name="sort"
                id=""
                onChange={(e) => handleSort(e.target.value)}
              >
                <option value="id">Position</option>
                <option value="name">Product Name</option>
                <option value="price_asc">Price : Low To High</option>
                <option value="price_dec">Price : High To Low</option>
              </select>
            </div>
            <div className="pagination_div">
              <button
                className={pageNum === 1 ? "active" : null}
                onClick={() => {
                  setPageNum(1);
                  setProdloading(true);
                }}
              >
                1
              </button>
              <button
                className={pageNum === 2 ? "active" : null}
                onClick={() => {
                  setPageNum(2);
                  setProdloading(true);
                }}
              >
                2
              </button>
              <button
                className={pageNum === 3 ? "active" : null}
                onClick={() => {
                  setPageNum(3);
                  setProdloading(true);
                }}
              >
                3
              </button>
              <button
                className={pageNum === 4 ? "active" : null}
                onClick={() => {
                  setPageNum(4);
                  setProdloading(true);
                }}
              >
                4
              </button>
              <button
                className={pageNum === 5 ? "active" : null}
                onClick={() => {
                  setPageNum(5);
                  setProdloading(true);
                }}
              >
                5
              </button>
              <button
                onClick={() => {
                  setPageNum(pageNum + 1);
                  setProdloading(true);
                }}
              >
                <span class="fa-solid fa-angle-right"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
