import { Banner, Banner2, Banner3, Banner4, Textonly } from './banner';
import { Bestseller } from './productrows';
import {Productslider} from './Productslideshow';
import { Upperpart } from './upperpart';
import {Tabsfunction} from "./productbycat"


export const Merge = ()=>{
    return(
        <>
        <Upperpart/>
<Banner/>
<Productslider/>
<Banner2/>

<Tabsfunction/>
<Banner3/>
<Bestseller/>
<Banner4/>
<Textonly/>
        </>
    )
} 