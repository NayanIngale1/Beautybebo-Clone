import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "./productbycat.css"

export const Tabsfunction = () => {
    const [Data, setData] = useState([]);

 useEffect(()=>{
  fetch(`https://beautibebo.herokuapp.com/products/sub/face?pagesize=4`)
  .then((response) => response.json())
  .then((actualData) => setData(actualData))
 },[])

      const handlechange = async(e) => {
        console.log(e)
        
        fetch(`https://beautibebo.herokuapp.com/products/sub/${e}?pagesize=4`)
        .then((response) => response.json())
        .then((actualData) => setData(actualData))
    
      }
    

    
     

      const Fecthdata = () =>{
        return <div className='fecthdatadiv'>
        {Data.map((e)=>{
                return <div className='btnmapdata'>
                     
            <img src={e.image} alt="" srcset="" />
                    <p>{e.name}</p>
                    <div className="icondiv">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    ({e.review})
                    </div>
                    <div className="oldnewprice">
                   <span className="oldprice">₹{e.strickthrough_price}    </span>   
                    <span className="newprice">  ₹{e.price}</span>  
                
                    </div>
                    <div className="addtocard">
                        <button className="addbutton">
                        <i class="fa-solid fa-basket-shopping"></i>     ADD TO CARD
                        </button>
                       <div className="heartdiv"><i class="fa-solid fa-heart"></i></div>
                        
                    </div>       
                
            </div>
      })}
      </div>
    }
 
   
    return (
        <Tabs >
      
    <TabList> 
    <div className='tablistdiv'>
      <Tab className={"tabs"} onClick={()=>{
          handlechange("face");
      }}>
         <img src="https://www.beautybebo.com/pub/media/catalog/category/makeup_1.png" alt="" srcset="" />
         <p>Makeup</p></Tab>

      <Tab className={"tabs"}  onClick={()=>{
          handlechange("lips")
      }}>  <img src="https://www.beautybebo.com/pub/media/catalog/category/skin.png" alt="" srcset="" />
         <p>Skin</p></Tab>


    <Tab className={"tabs"}  onClick={()=>{
          handlechange("eye")
      }}>
         <img src="https://www.beautybebo.com/pub/media/catalog/category/hair.png" alt="" srcset="" />
         <p>Hair</p></Tab>

      <Tab className={"tabs"}  onClick={()=>{
          handlechange("nails")
      }}>  <img src="https://www.beautybebo.com/pub/media/catalog/category/personal-care.png" alt="" srcset="" />
         <p>Personal care</p></Tab>

         <Tab className={"tabs"} onClick={()=>{
          handlechange("lips")
      }}>
         <img src="https://www.beautybebo.com/pub/media/catalog/category/mom-baby-care.png" alt="" srcset="" />
         <p>Mom & Baby Care</p></Tab>

      <Tab className={"tabs"} onClick={()=>{
          handlechange("eye")
      }}>  <img src="https://www.beautybebo.com/pub/media/catalog/category/eye_1.png" alt="" srcset="" />
         <p>Eye</p></Tab> 

         <Tab className={"tabs"} onClick={()=>{
          handlechange("face")
      }}>
         <img src="https://www.beautybebo.com/pub/media/catalog/category/fragrance_3.png" alt="" srcset="" />
         <p>Fragrance</p></Tab>

         </div>
         
    </TabList>
      

    <TabPanel >
    <Fecthdata/>
    </TabPanel>
    <TabPanel>

      <Fecthdata/>
    </TabPanel>
    <TabPanel>

      <Fecthdata/>
    </TabPanel>
    <TabPanel >
    <Fecthdata/>
    </TabPanel>
    <TabPanel>

      <Fecthdata/>
    </TabPanel>
    <TabPanel>

      <Fecthdata/>
    </TabPanel>
    <TabPanel>

<Fecthdata/>
</TabPanel>
  
  </Tabs>

    )
  
};

