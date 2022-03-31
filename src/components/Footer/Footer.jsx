import React from "react";

var style = {
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%",
  backgroundColor: "rgb(218, 218, 218)",
  color: "rgb(0, 0, 0)",
  borderTop: "2px solid rgb(255, 255, 255)",
  flexShrink: "0",
};
var phantom = {
  display: "block",
  padding: "20px",
  height: "60px",
  width: "100%",
};
const Footer = () => {
  return (
    <div>
      <div style={phantom} />
      <div style={style}>
        <div>&copy; Copyright 2022</div>
      </div>
    </div>
  );
};
export default Footer;