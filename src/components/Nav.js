import React from "react";
import { Link } from "react-router-dom";

const NavLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Gallery",
    path: "/gallery",
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
      <span>
        <img src="https://cdn.pixabay.com/photo/2014/04/02/10/15/meditation-303260_960_720.png" />
        जीवोदय योग संसथान{" "}
      </span>
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
