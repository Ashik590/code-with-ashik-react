import React, { useState } from "react";
import cross from "../img/cross.svg";
import search from "../img/search.svg";
import logo from "../img/logo.svg";
import menu from "../img/menu.svg";

const Header = () => {
  const [dis, setDis] = useState(false);
  const displayResNav = () => {
    setDis(!dis);
  };
  return (
    <>
      {dis ? (
        <div id="res_nav">
          <img src={cross} alt="cross" onClick={displayResNav} />
          <ul className="list-group">
            <li>
              <a className="text-center d-block" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="text-center d-block" href="#">
                About
              </a>
            </li>
            <li>
              <a className="text-center d-block" href="#">
                Blogs
              </a>
            </li>
            <li>
              <a className="text-center d-block" href="#">
                Contact
              </a>
            </li>
            <li>
              <a className="text-center d-block" href="#">
                Members
              </a>
            </li>
          </ul>
          <div className="nav_search d-flex align-items-center">
            <input type="text" placeholder="Search here" />
            <a className="d-flex align-items-center" href="#">
              <img src={search} alt="icon" />
            </a>
          </div>
        </div>
      ) : (
        ""
      )}
      <header>
        <nav className="containers">
          <a href="#">
            <img className="logo d-inline-block" src={logo} alt="logo" />
          </a>
          <div className="nav_left align-items-center">
            <ul className="d-flex ps-0 mb-0 me-2">
              <li>
                <a className="active" href="#">
                  Home
                </a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Blogs</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Members</a>
              </li>
            </ul>
            <div className="nav_search d-flex align-items-center">
              <input type="text" placeholder="Search here" />
              <a className="d-flex align-items-center" href="#">
                <img src={search} alt="something" />
              </a>
            </div>
            <a href="#" className="d-inline-block tap">
              JOIN
            </a>
          </div>
          <img onClick={displayResNav} src={menu} alt="menu" />
        </nav>
      </header>
    </>
  );
};

export default Header;
