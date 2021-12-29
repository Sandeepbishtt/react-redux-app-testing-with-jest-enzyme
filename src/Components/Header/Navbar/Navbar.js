import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="mdl-layout__header-row portfolio-navigation-row mdl-layout--large-screen-only">
      <nav
        className="mdl-navigation mdl-typography--body-1-force-preferred-font"
        style={{ maxWidth: "none", paddingTop: "0.5rem" }}
      >
        <Link className="mdl-navigation__link is-active" to={"/"}>
          Portfolio
        </Link>
        <Link className="mdl-navigation__link" to={`/blog`}>
          Blog
        </Link>
        <Link className="mdl-navigation__link" to={"/about"}>
          About
        </Link>
        <Link className="mdl-navigation__link" to={"/contact"}>
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
