import React, { useState, useEffect } from "react";

import classes from "./header.module.css";

const Header = (props) => {
  const [navbar, setNavbar] = useState(false);

  const changeHeader = () => {
    window.scrollY >= 200 ? setNavbar("white") : setNavbar(false);
  };

  useEffect(() => {
    changeHeader();
    window.addEventListener("scroll", changeHeader);
  });

  return (
    <div style={{backgroundColor: navbar}} className={`${classes.header} ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Header;
