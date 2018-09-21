import React from "react";
import "../styles/Navbar.css";

const styles = {
  navTextStyle: {
    margin: "auto",
    float: "right", 
  }
};

const Navbar = () => (
  <nav class="navbar navbar-expand-lg">
    <a class="navbar-brand" href="#">React Says</a>
    <span style={styles.navTextStyle} class="navbar-text">
      Score: 0 | Top Score: 0
    </span>
  </nav>
);

export default Navbar;