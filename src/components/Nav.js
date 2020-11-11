import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

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
    title: "Knowledge Center",
    path: "/library",
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
  const [show, handleShow] = useState(false);
  const [menuActive, setmenuActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`navBar ${show && "fixed"}`}>
      <span>
        <img src="https://cdn.pixabay.com/photo/2014/04/02/10/15/meditation-303260_960_720.png" />
        जीवोदय योग संसथान
      </span>
      <div className={`menu-content-container ${menuActive && "active"}`}>
        <ul>
          {NavLinks.map((link, index) => (
            <li key={index}>
              <Link onClick={() => setmenuActive(false)} to={link.path}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <i className="menuIcon" onClick={() => setmenuActive(!menuActive)}>
        <FaBars />
      </i>
    </div>
  );
}

export default Nav;
