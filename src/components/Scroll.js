// import { AiOutlineArrowUp } from "react-icons/ai";
// import React, { useEffect, useState } from "react";
// import './scroll.css'
// const Scroll = () => {
//   const [visible, setVisible] = useState(false);
//   useEffect(() => {
//     window.addEventListener("scroll", () => {
//       if (window.scrollY > 400) {
//         setVisible(true);
//       } else {
//         setVisible(false);
//       }
//     });
//   }, []);
//   const goToTop = () =>window.scrollTo({ top: 0, behavior: "smooth" });

//   return (

//     <div className="top-to-btn">
//       {visible &&
//         (<AiOutlineArrowUp className="icon-position icon-style" onClick={goToTop} />)}
//     </div>
//   )
// }

// export default Scroll;