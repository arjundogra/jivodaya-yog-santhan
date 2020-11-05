import React from "react";
import { Link } from "react-router-dom";

const NavLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact Us",
    path: "/contact-us",
  },
];

function Nav() {
  return (
    <div className="nav">
      <span>जीवोदय योग संसथान </span>
      <ul>
        {NavLinks.map((link, index) => (
          <li key={index}>
            <Link to={link.path}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Nav;
