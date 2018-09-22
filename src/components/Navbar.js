import React from "react";
import "../styles/Navbar.css";

const styles = {
  navTextStyle: {
    float: "right"
  }
};

const Navbar = () => (
  <nav className="navbar navbar-expand-lg">
    <span>
      <a className="navbar-brand" href="">React Says</a>
    </span>

    <span style={styles.navTextStyle} className="navbar-text">
      Score: 0 | Top Score: 0
    </span>
  </nav>
);

export default Navbar;