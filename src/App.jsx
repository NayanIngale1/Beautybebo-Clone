import React, { useEffect, useState } from 'react';

import "./App.css"
import { Banner, Banner2, Banner3 } from './homepage/banner';
import { Bestseller } from './homepage/productcomponet';
import {Productslider} from './homepage/Productslider';
import { Upperpart } from './homepage/upperpart';
import {Tabsfunction} from "./homepage/btn2"

function App(){

  return( <div className='App'>
    
    
     <Upperpart/>
<Banner/>
<Productslider/>
<Banner2/>

{/* <Bestseller/> */}
<Tabsfunction/>
<Banner3/>
  </div>)

}



  
export default App;  