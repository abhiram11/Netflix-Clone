import React, { useEffect, useState } from "react";
import "./Nav.css";

//read back at 1:41:45, 1:45:00 exact, 1:48:30

function Nav() {
  const [show, handleShow] = useState([]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll"); //remove listener redundancy, not called 20 times, etc...
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />

      <img
        className="nav_avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Avatar"
      ></img>
    </div>
  );
}

export default Nav;

// http://pbs.twimg.com/profile_images/2284174872/7df3h38zabcvjylnyfe3_normal.png
