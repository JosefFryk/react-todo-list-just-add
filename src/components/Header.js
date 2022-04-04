import React from "react";
// old way with props, 
const Header = (props) => {
  return (
    <div>
      {/* props.title catching title to header from app.js */}
      <h1 style={headerStyle}>{props.title}</h1>  
    </div>
  );
};
// passing up css
const headerStyle = {
  fontSize: "40px",
  textDecoration: "underline",
};

export default Header;

