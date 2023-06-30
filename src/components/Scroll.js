import { AiOutlineArrowUp } from "react-icons/ai";
import React, { useState } from "react";

const Scroll = () => {
    const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };
  window.addEventListener("scroll", toggleVisible);
  return (
    <button
    onClick={() => {
        alert("click");
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }}
    style={{
      display: {visible} ? "inline" : "none",
      position:'fixed',
      borderRadius: "3px",
      padding: "6px 10px",
      outline: "none",
      border: "none",
      fontSize: "20px",
      bottom: "40px",
      right: "40px",
      backgroundColor: "#deb666",
      color: "#fff",
      textAlign: "center",
    //   display:'inline'

    }}>
    <AiOutlineArrowUp />
  </button>
  )
}

export default Scroll