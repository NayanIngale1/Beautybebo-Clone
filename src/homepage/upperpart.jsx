import React from 'react'
import styled from "styled-components"

import { slider } from './Slideshow';
export const Upperpart = () => {
    const Upperdiv  =  styled.div`
    background-color: #ffff;
    width: 100%;
    height: 100%;
    display: flex;
    padding: 10px;
    border : 1px  solid lightgray;

    .Allcattext{
        font-size: 18px;
       
        text-align: left;
        font-weight: bold;
    }
    .icondiv{
      display: flex;
      margin: 10px;
      width: 85%;
    
      justify-content: space-between;
    }
    .iconimage{
      display: flex;
    }
    .iconimage > div{
      margin-left: 10px;
      font-size: 14px;
      line-height: 25px;
    }

   
    .iconimage > img{
      width: 20px;
      height: 20px;
     
    }

    `;
    const Catgrydiv =  styled.div`
         @media (min-width: 950px) { 

        width:30%;
        height: 50px;

       
        padding: 10px;
        padding-left: 0px;
        margin-right: 10px;
  }
  @media (max-width: 949px) { 
    display: none;

  }
    `;
  return ( <Upperdiv>
      <Catgrydiv>
          <div className='Allcattext' >

    <span>  <i class="fa-solid fa-list-ul fa-sm"></i></span> ALL CATEGORIES
          </div>
          <div className='icondiv'>
            <div className='iconimage'>
          <img src="https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/makeup-small.png" alt="" srcset="" />
                          <div>Makeup</div> 
            </div>
            <div>
            <i class="fa-solid fa-angle-right"></i>
            </div>
          </div>

      </Catgrydiv>
      {slider}

  </Upperdiv>
  )
}

