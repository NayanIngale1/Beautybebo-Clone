import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "./btn.css"

export const Tabsfunction = () => {
    const [Data, setData] = useState([]);
 useEffect(()=>{
  fetch(`http://localhost:8080/products?category=Ayurveda&_limit=4`)
  .then((response) => response.json())
  .then((actualData) => setData(actualData))
 },[])
      const handlechange = async(e) => {
        fetch(`http://localhost:8080/products?category=${e}&_limit=4`)
        .then((response) => response.json())
        .then((actualData) => setData(actualData))
    }
    

    //   const handlechange = (x) => {
    //     let es = Data
    //     setvalue(es)
    // //  console.log(vlaue) 
    //     let y = [...vlaue].filter(function(vlaue) {
    //             return vlaue.category ==  x});
    //             setvalue(y)
    //             console.log("thisis"+x)
    //   };
    //   console.log(vlaue)
     

      const Fecthdata = () =>{
        return <div className='fecthdatadiv'>
        {Data.map((e)=>{
                return <div className='btnmapdata'>
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
            </div>
      })}
      </div>
    }
 
   
    return (
        <Tabs >
      
    <TabList> 
    <div className='tablistdiv'>
      <Tab className={"tabs"} onClick={()=>{
          handlechange("Ayurveda");
      }}>
         <img src="https://www.beautybebo.com/pub/media/catalog/category/makeup_1.png" alt="" srcset="" />
         <p>Makeup</p></Tab>

      <Tab className={"tabs"}  onClick={()=>{
          handlechange("skin")
      }}>  <img src="https://www.beautybebo.com/pub/media/catalog/category/skin.png" alt="" srcset="" />
         <p>Skin</p></Tab>


    <Tab className={"tabs"}  onClick={()=>{
          handlechange("hair")
      }}>
         <img src="https://www.beautybebo.com/pub/media/catalog/category/hair.png" alt="" srcset="" />
         <p>Hair</p></Tab>

      <Tab className={"tabs"}  onClick={()=>{
          handlechange("face")
      }}>  <img src="https://www.beautybebo.com/pub/media/catalog/category/personal-care.png" alt="" srcset="" />
         <p>Personal care</p></Tab>

         <Tab className={"tabs"} onClick={()=>{
          handlechange("Personal Care")
      }}>
         <img src="https://www.beautybebo.com/pub/media/catalog/category/mom-baby-care.png" alt="" srcset="" />
         <p>Mom & Baby Care</p></Tab>

      <Tab className={"tabs"} onClick={()=>{
          handlechange("face")
      }}>  <img src="https://www.beautybebo.com/pub/media/catalog/category/eye_1.png" alt="" srcset="" />
         <p>Eye</p></Tab> 

         <Tab className={"tabs"} onClick={()=>{
          handlechange("hair")
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

