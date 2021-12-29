import React from "react";
import Heading from "./Navbar/Heading";
import Navbar from "./Navbar/Navbar";

const Header = () => {
  return (
    <header class="mdl-layout__header mdl-layout__header--waterfall portfolio-header">
      <Heading />
      <Navbar />
    </header>
  );
};

export default Header;
