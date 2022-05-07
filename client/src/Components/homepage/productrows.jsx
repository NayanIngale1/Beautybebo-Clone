import { useEffect, useState } from 'react';
import styled from 'styled-components';

export const Bestseller = () => {
  const [bestseller, setseller] = useState([]);
  const [latest, setlatest] = useState([]);
  const [most, setmost] = useState([]);

  const Prodmaindiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    @media (max-width: 950px) {
      display: flex;
      flex-direction: column;
    }
  `;
  const Productsubdiv = styled.div`
    display: flex;
    width: 31%;
    @media (max-width: 950px) {
      width: 100%;
      margin-top: 20px;
    }

    @media (max-width: 950px) {
      .btnmapdata {
        width: 100%;
        height: fit-content;
        /* padding: 20px 20px;
                padding-right:0px ;
                padding-bottom: 0px; */
        padding-top: 20px;
      }
    }
    @media (min-width: 951px) {
      .btnmapdata {
        width: 100%;
        height: fit-content;
        /* padding: 20px 20px;
                padding-right:0px ;
                padding-bottom: 0px; */
        padding-top: 20px;
        display: flex;
      }
    }

    .fecthdatadiv {
      display: flex;
      flex-direction: column;
    }
    .btnmapdata {
      width: 100%;
      height: fit-content;
      /* padding: 20px 20px;
                padding-right:0px ;
                padding-bottom: 0px; */
      padding-top: 20px;
      display: flex;
    }
    .fecthimg {
      /* padding-top: 40%; */
      max-width: 200px;
      height: 150px;
      justify-content: center;
      text-align: center;
    }
    .fecthdataimg {
      margin-top: 20px;
    }
    .imgdivdata {
      width: 40%;
    }
    .fecthdataimg {
      width: 100px;
      height: 100px;
    }
    .textdivfecth {
      text-align: left;
      width: 70%;
    }
    .textdivfecth > p {
      height: 35px;
      overflow: hidden;
      font-size: 14px;
      font-family: Roboto;
    }
    .addtocard {
      width: fit-content;
    }
    .onlytextdiv {
      border-bottom: 1px solid lightgray;
      text-align: left;
      padding-bottom: 1px;
    }
    .onlytextdiv > p {
      width: fit-content;
      font-size: 18px;
      border-bottom: 2px solid #dd0285;
    }
  `;

  useEffect(() => {
    fetch(`https://beautibebo.herokuapp.com/products/sub/face?pagesize=3`)
      .then((response) => response.json())
      .then((actualData) => setseller(actualData));
    fetch(`https://beautibebo.herokuapp.com/products/sub/lips?pagesize=3`)
      .then((response) => response.json())
      .then((actualData) => setlatest(actualData));
    fetch(`https://beautibebo.herokuapp.com/products/sub/eye?pagesize=3`)
      .then((response) => response.json())
      .then((actualData) => setmost(actualData));
  }, []);

  const Bestseller = () => {
    return (
      <div className="fecthdatadiv">
        <div className="onlytextdiv">
          <p>BEST SELLER</p>
        </div>
        {bestseller.map((e) => {
          return (
            <div className="btnmapdata" key={e.id}>
              <div className="fecthimg">
                <img src={e.image} className="fecthdataimg" />
              </div>
              <div className="textdivfecth">
                <p>{e.name}</p>
                <div className="icondiv">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>({e.review})
                </div>
                <div className="oldnewprice">
                  <span className="oldprice">₹{e.strickthrough_price} </span>
                  <span className="newprice"> ₹{e.price}</span>
                </div>
                <div className="addtocard">
                  <button className="addbutton">
                    <i className="fa-solid fa-basket-shopping"></i> ADD TO CARD
                  </button>
                  <div className="heartdiv">
                    <i className="fa-solid fa-heart"></i>
                  </div>
                </div>
                {/* <div className="hoverEye">
            < span class="fa-solid fa-eye"></span>
        </div> */}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const Latestseller = () => {
    return (
      <div className="fecthdatadiv">
        <div className="onlytextdiv">
          <p>LATEST PRODUCTS</p>
        </div>
        {latest.map((e) => {
          return (
            <div className="btnmapdata" key={e.id}>
              <div className="fecthimg">
                <img src={e.image} className="fecthdataimg" />
              </div>
              <div className="textdivfecth">
                <p>{e.name}</p>
                <div className="icondiv">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>({e.review})
                </div>
                <div className="oldnewprice">
                  <span className="oldprice">₹{e.strickthrough_price} </span>
                  <span className="newprice"> ₹{e.price}</span>
                </div>
                <div className="addtocard">
                  <button className="addbutton">
                    <i className="fa-solid fa-basket-shopping"></i> ADD TO CARD
                  </button>
                  <div className="heartdiv">
                    <i className="fa-solid fa-heart"></i>
                  </div>
                </div>
                {/* <div className="hoverEye">
< span class="fa-solid fa-eye"></span>
</div> */}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const Mostdata = () => {
    return (
      <div className="fecthdatadiv">
        <div className="onlytextdiv">
          <p>MOST VIEWED</p>
        </div>
        {most.map((e) => {
          return (
            <div className="btnmapdata" key={e.id}>
              <div className="fecthimg">
                <img src={e.image} className="fecthdataimg" />
              </div>
              <div className="textdivfecth">
                <p>{e.name}</p>
                <div className="icondiv">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>({e.review})
                </div>
                <div className="oldnewprice">
                  <span className="oldprice">₹{e.strickthrough_price} </span>
                  <span className="newprice"> ₹{e.price}</span>
                </div>
                <div className="addtocard">
                  <button className="addbutton">
                    <i className="fa-solid fa-basket-shopping"></i> ADD TO CARD
                  </button>
                  <div className="heartdiv">
                    <i className="fa-solid fa-heart"></i>
                  </div>
                </div>
                {/* <div className="hoverEye">
        < span class="fa-solid fa-eye"></span>
    </div> */}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div>
      <Prodmaindiv>
        <Productsubdiv>
          <Bestseller />
        </Productsubdiv>
        <Productsubdiv>
          <Latestseller />
        </Productsubdiv>
        <Productsubdiv>
          <Mostdata />
        </Productsubdiv>
      </Prodmaindiv>
    </div>
  );
};
