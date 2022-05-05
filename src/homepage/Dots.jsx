// import React from "react";

// export const CustomDot = ({ onClick, ...rest }) => {
//     const {
//       onMove,
//       index,
//       active,
//       carouselState: { currentSlide, deviceType }
//     } = rest;
//     const carouselItems = [CarouselItem1, CaourselItem2, CarouselItem3];
//     // onMove means if dragging or swiping in progress.
//     // active is provided by this lib for checking if the item is active or not.
//     return (
//       <button
//         className={active ? "active" : "inactive"}
//         onClick={() => onClick()}
//       >
//         {React.Children.toArray(carouselItems)[index]}
//       </button>
//     );
//   };