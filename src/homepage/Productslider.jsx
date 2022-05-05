import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components"

const Newarrivals = styled.div`
    margin-top:10px ;

    .textdiv{
        font-size: 115%;
        font-weight: bold;
        text-align: left;
        width: fit-content;
        border-bottom: 2px solid #DD0285;
    }
    .carouselmaindiv{
        display: flex;
        width: 100%;
    
        overflow: hidden;
    }
    
    .productdiv{
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
      & > img{
       
        max-width: 250px;
       max-height: 220px;
      
    }
    @media (max-width: 450px) { 
        & > img{
            max-width: 100px;
       max-height: 100px;  
   }
        
  }
  @media (max-width: 750px) { 
    & > img{
            max-width: 150px;
       max-height: 150px;  
   }
  }
    .icondiv > i {
        font-size: 12px;
        color: #ECA330;
        
    }
    .icondiv {
       
        font-size: 12px;
      
    }
    & > p{
       overflow: hidden;
        font-size: 14px;
        font-family: inherit;
        height: 27px;
        padding-bottom: 10px;
        margin-top: 10px;
    }
    .oldnewprice{
        margin-top: 10px;
    }
    .oldprice{
        font-size: 12px;
        color: grey;
        text-decoration: line-through;
        display: inline-block;
        margin-right: 8px;
    }
    .newprice{
        font-size: 17px;
        font-weight: 900;
        color: #DD0285;
        display: inline-block;
        margin-right: 8px;
    }
    .discount{
        font-size: 14px;
        font-weight: 900;
        color: green;
    }
    .addtocard{
        margin: 20px 0px;
        display: flex;
        text-align: center;
        justify-content: center;
        height: 30px;
    }
    .addbutton{
        font-size: 12px;
        font-weight: 500;
        height: 32px;
        line-height: 30px;
        color: white;
       border: none;
       outline: none;
        padding: 0px 15px 0px 20px;
        background-color: #DD0285;
        font-family: inherit;
        border-radius: 5px;
    }
    .addbutton > i {
        font-size: 14px;
    

    } 
    .heartdiv  {
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
 export const Productslider = ()=>{
    
    
     const [data, setdata] = useState([])
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 900 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 900, min:600 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 600, min: 0 },
          items: 2
        }
      };
      useEffect(()=>{
        fetch(`http://localhost:8080/products`)
        .then((response) => response.json())
        .then((actualData) => setdata(actualData));
      }, []);

      
    
      return( 
      <Newarrivals>
          <div className="textdiv">
         NEW ARRIVALS!
          </div>
         

      <Carousel responsive={responsive} 
      autoPlay={true} 
      autoPlaySpeed={1000}
      swipeable={true}
      infinite={true}
      removeArrowOnDeviceType={["tablet", "mobile" , "desktop"]}
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
          
            

            {data.map((e)=>{
                return <Productdiv  primary> 
            <img src={e.img} alt="" srcset="" />
                    <p>{e.title}</p>
                    <div className="icondiv">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    ({e.ratings})
                    </div>
                    <div className="oldnewprice">
                   <span className="oldprice">₹{e.oldprice}    </span>   
                    <span className="newprice">  ₹{e.newprice}</span>  
                    {e.discount === "none" ?  null : <span className="discount">{e.discount}%</span> }
                    </div>
                    <div className="addtocard">
                        <button className="addbutton">
                        <i class="fa-solid fa-basket-shopping"></i>     ADD TO CARD
                        </button>
                       <div className="heartdiv"><i class="fa-solid fa-heart"></i></div>
                        
                    </div>       
                    <div className="hoverEye">
                < span class="fa-solid fa-eye"></span>
            </div>
                </Productdiv>
                   

                    

                
            })}
        
           
  
      </Carousel>
        
      </Newarrivals>
  
      )

};
// {
//         "id": 1,
//         "img": "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/i/m/image1_600x.jpg",
//         "title": "Lotus Herbals Whiteglow Vitamin",
//         "oldprice": "475.00",
//         "newprice": "428.00",
//         "ratings": "5",
//         "category": "skin",
//         "discount": "10"
//       }