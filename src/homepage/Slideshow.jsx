import Carousel from 'nuka-carousel';
import "./slideshow.css"

export const slider = (
    <Carousel 
    autoplay={true}
    autoplayInterval={1500}
   
    renderCenterLeftControls={({ previousSlide }) => (
         null
      )}
      renderCenterRightControls={({ nextSlide }) => (
            null
      )}
    
    cellAlign="center"
    defaultControlsConfig={{
   
        containerClassName: "Slideshow",
        nextButtonText: false,
        nextButtonStyle:{
            backgroundColor:"transparent",
            fontSize:"0px",
            width: "0px"
        },
       
        // pagingDotsStyle: {
  
        //   marginBottom: "0px",
        // },
        pagingDotsClassName: "dot",
  pagingDotsContainerClassName: "dotcont",
 
      }}
      style={{
           width:"100%" ,
      }}
     
  >
    
   
    <img  className='sideshowimg'  src="https://www.beautybebo.com/pub/media/mega-menu/slider-3.jpg" />

    <img  className='sideshowimg'  src="https://www.beautybebo.com/pub/media/mega-menu/slider-2.jpg" />
    <img  className='sideshowimg' src = "https://www.beautybebo.com/pub/media/mega-menu/slider-1.jpg" />
    

  </Carousel> 
);