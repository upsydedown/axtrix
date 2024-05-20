import React, { useState } from "react";
import { NavLink, useMatch, useResolvedPath } from "react-router-dom";
import "./Navbar.css";

const CustomLink = ({ to, content, ...children }) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <NavLink to={to} {...children}>
        {content}
      </NavLink>
    </li>
  );
};

const Navbar = () => {
  return (
    <>
      <section className="navbarMain">
        <div className="navBody">
          <CustomLink to="/" content="Home" />
          <CustomLink to="/about" content="About" />
        </div>
      </section>
    </>
  );
};

export default Navbar;
