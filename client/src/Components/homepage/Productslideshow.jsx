// import { useEffect, useState } from 'react';

import { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../../context/productContext';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styled from 'styled-components';

const Newarrivals = styled.div`
  margin-top: 10px;

  .textdiv {
    font-size: 115%;
    font-weight: bold;
    text-align: left;
    width: fit-content;
    border-bottom: 2px solid #dd0285;
  }
  .carouselmaindiv {
    display: flex;
    width: 100%;

    overflow: hidden;
  }

  .productdiv {
    border: 1px solid lightgrey;
  }
  /* .productdiv:hover {
    content: '\f06e';
    font-family: 'Font Awesome 5 Free';
    
    position: relative;
  } */
`;
const Productdiv = styled.div`
  border: 1px solid lightgrey;
  justify-content: center;
  text-align: center;
  align-items: center;
  &:hover .hoverEye {
    visibility: visible;
  }

  & .hoverEye {
    visibility: hidden;
    transition: all 167ms ease-in-out;
  }
  .hoverEye {
    width: fit-content;
    padding: 5px 8px;
    border-radius: 3px;
    color: white;
    background-color: #dd0285;
    position: absolute;
    top: 30%;
    left: 45%;
    transition: all 167ms ease-in-out;
  }
  & > img {
    max-width: 250px;
    max-height: 220px;
  }
  @media (max-width: 450px) {
    & > img {
      max-width: 100px;
      max-height: 100px;
    }
    .icondiv {
      font-size: 12px;
    }
    & > p {
      overflow: hidden;
      font-size: 14px;
      font-family: inherit;
      height: 40px;
      padding-bottom: 10px;
      margin-top: 10px;
    }
    & > p:hover {
      color: #dd0285;
      cursor: pointer;
    }
    .oldnewprice {
      margin-top: 10px;
    }
    .oldprice {
      font-size: 12px;
      color: grey;
      text-decoration: line-through;
      display: inline-block;
      margin-right: 8px;
    }
    .newprice {
      font-size: 17px;
      font-weight: 900;
      color: #dd0285;
      display: inline-block;
      margin-right: 8px;
    }
    .discount {
      font-size: 14px;
      font-weight: 900;
      color: green;
    }
    .addtocard {
      margin: 20px 0px;
      display: flex;
      text-align: center;
      justify-content: center;
      height: 30px;
    }
    .addbutton {
      font-size: 12px;
      font-weight: 500;
      height: 32px;
      line-height: 30px;
      color: white;
      border: none;
      outline: none;
      padding: 0px 15px 0px 20px;
      background-color: #dd0285;
      font-family: inherit;
      border-radius: 5px;
    }
    .addbutton > i {
      font-size: 14px;
    }
    .heartdiv {
      margin-left: 10px;
      height: 30px;
      font-size: 14px;
      background-color: #666666;
      padding-top: 7px;
      width: 30px;
      color: white;
      text-align: center;

      border-radius: 5px;
    }
  }
  .icondiv > i {
    font-size: 12px;
    color: #eca330;
  }
  .icondiv {
    font-size: 12px;
  }
  & > p {
    overflow: hidden;
    font-size: 14px;
    font-family: inherit;
    height: 27px;
    padding-bottom: 10px;
    margin-top: 10px;
  }
  .oldnewprice {
    margin-top: 10px;
  }
  .oldprice {
    font-size: 12px;
    color: grey;
    text-decoration: line-through;
    display: inline-block;
    margin-right: 8px;
  }
  .newprice {
    font-size: 17px;
    font-weight: 900;
    color: #dd0285;
    display: inline-block;
    margin-right: 8px;
  }
  .discount {
    font-size: 14px;
    font-weight: 900;
    color: green;
  }
  .addtocard {
    margin: 20px 0px;
    display: flex;
    text-align: center;
    justify-content: center;
    height: 30px;
  }
  .addbutton {
    font-size: 12px;
    font-weight: 500;
    height: 32px;
    line-height: 30px;
    color: white;
    border: none;
    outline: none;
    padding: 0px 15px 0px 20px;
    background-color: #dd0285;
    font-family: inherit;
    border-radius: 5px;
  }
  .addbutton > i {
    font-size: 14px;
  }
  .heartdiv {
    margin-left: 10px;
    height: 23px;
    font-size: 14px;
    background-color: #666666;
    padding-top: 7px;
    width: 30px;
    color: white;
    text-align: center;
    border-radius: 5px;
  }
`;
export const Productslider = () => {
  const [data, setdata] = useState([]);
  const { handleCart } = useContext(ProductContext);
  const { handleCartValue } = useContext(ProductContext);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 900 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 900, min: 600 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 2,
    },
  };
  useEffect(() => {
    fetch('https://beautibebo.herokuapp.com/products')
      .then((response) => response.json())
      .then((data) => setdata(data.product));
  }, []);

  return (
    <Newarrivals>
      <div className="textdiv">NEW ARRIVALS!</div>

      <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={1000}
        swipeable={true}
        infinite={true}
        removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']}
        dotListClass="custom-dot-list-style"
        ssr={true}
      >
        {/* //     <div><img src="https://www.beautybebo.com/pub/media/mega-menu/slider-3.jpg" /></div>
    //     <div> <img src="https://www.beautybebo.com/pub/media/mega-menu/slider-2.jpg" /></div>
    //     <div> <img src = "https://www.beautybebo.com/pub/media/mega-menu/slider-1.jpg" /></div>
    //     <div> <img src="https://www.beautybebo.com/pub/media/mega-menu/slider-3.jpg" /></div>
    //     <div><img src="https://www.beautybebo.com/pub/media/mega-menu/slider-3.jpg" /></div>
    //     <div> <img src="https://www.beautybebo.com/pub/media/mega-menu/slider-2.jpg" /></div>
    //     <div> <img src = "https://www.beautybebo.com/pub/media/mega-menu/slider-1.jpg" /></div>
    //     <div> <img src="https://www.beautybebo.com/pub/media/mega-menu/slider-3.jpg" /></div> */}

        {data.map((e) => {
          return (
            <Productdiv primary>
              <img src={e.image} alt="" srcset="" />
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
                {/* {e.discount === "none" ?  null : <span className="discount">{e.discount}%</span> } */}
              </div>
              <div className="addtocard">
                <button
                  className="addbutton"
                  onClick={() => {
                    handleCart(e);
                  }}
                >
                  <i className="fa-solid fa-basket-shopping"></i>ADD TO CART
                </button>
                <div className="heartdiv">
                  <i className="fa-solid fa-heart"></i>
                </div>
              </div>
              <div className="hoverEye">
                <span className="fa-solid fa-eye"></span>
              </div>
            </Productdiv>
          );
        })}
      </Carousel>
    </Newarrivals>
  );
};

// Weight: ""
// about_the_brand: "Body Shop is known for its world famous, and award winning body butters and hand creams, and all-time favorites such as tea tree oil range, born lippy glosses, hemp hand protector, plus new favorites such as Spa fit range, vitamin C, and colour crush range. The brand is totally committed to helping protect the planet, defending human rights, activating self-esteem, supporting community trade and remaining strong on our stance against animal testing."
// address_of_mfg: "The Body Shop International PLC Littlehampton, West Sussex BN17 6LS,UK"
// brand: "The Body Shop"
// category: "makeup"
// description: "Our new All-In-One BB cream transforms from a white cream to suit your skin tone. Pigment-filled capsules burst when applied to the skin, releasing the colour inside. Just blend for a perfect match and an even, undetectable finish. It's make-up and skincare in one."
// how_to_use: "Apply on top of or instead of your daily moisturiser using your fingers or our Fresh Nude Foundation Brush. Looking for extra coverage? Use it as a moisturising base under our Fresh Nude Foundation. For a matte finish, you can also mix it with our Instama"
// image: "https://www.beautybebo.com/pub/media/catalog/product/cache/9afc37bdf46fae888adf23d57cf627ad/t/h/th1.jpg"
// ingredients: ""
// name: "The Body Shop All-In-One BB Cream"
// name_of_mfg: "The Body Shop"
// origin: "Made In United Kingdom of Great Britain and Northern Ireland (the)"
// price: 1373
// review: "5.0"
// skin_type: "Dry"
// strickthrough_price: 1445
// sub_category: "face"
// _id: "62740e68f0cb91c87bff350b"
