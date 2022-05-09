import React from 'react'
import styled from "styled-components"
import { Sidebar } from './sidebar';

import { slider } from './Slideshow';
export const Upperpart = () => {
    const Upperdiv  =  styled.div`
    background-color: #ffff;
    /* width: 100%; */
    /* border:2px solid red; */
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
        font-size: 16px;
  }
  @media (max-width: 949px) { 
    display: none;

  }
    `;
  return ( <Upperdiv>
      <Catgrydiv>
          <Sidebar/>

      </Catgrydiv>
      {slider}

  </Upperdiv>
  )
}

