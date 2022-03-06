import { useState } from "react";
import { FaSearch, FaAlignJustify } from "react-icons/fa";
import "./style.scss";

function Navbar() {
  const [open, setOpen] = useState(false);
  // Toggle
  const toggle = () => {
    setOpen(!open);
  };
  // Render
  return (
    <div className="main-nav">
      <h2>Logo</h2>
      <nav>
        <ul class="navbar-left">
          <li>
            <a href="#">Private clients</a>
          </li>
          <li>
            <a href="#">Corporates</a>
          </li>
          <li>
            <a href="#">Insights</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <ul className="navbar-right">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">
              <div className="search-icon">
                <FaSearch />
              </div>
            </a>
          </li>
          <li>
            <a href="#">Book A meeting</a>
          </li>
        </ul>
      </nav>
      {/* Mobile Nav */}
      {open && (
        <nav className="mobile">
          <FaAlignJustify onClick={toggle} className="close-menu" />
          <ul class="navbar-left">
            <li>
              <a href="#">Private clients</a>
            </li>
            <li>
              <a href="#">Corporates</a>
            </li>
            <li>
              <a href="#">Insights</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <ul className="navbar-right">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">
                <div className="search-icon">
                  <FaSearch />
                </div>
              </a>
            </li>
            <li>
              <a href="#">Book A meeting</a>
            </li>
          </ul>
        </nav>
      )}
      <FaAlignJustify onClick={toggle} className="open-menu" />
    </div>
  );
}

export default Navbar;
