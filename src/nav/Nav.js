import logo from "../logo-white.png";
import "./Nav.scss";
import Hamburger from "./hamburger/Hamburger";

function Nav() {
  return (
    <nav>
      <Hamburger className="hamburger" />
      <div className="header-links">
        <div className="left-nav-links">
          <a href="/">All Tours</a>
          <a href="/">My Tours</a>
        </div>
        <div className="nav-logo">
          <img src={logo} className="logo" alt="Natours logo" />
        </div>
        <div className="right-nav-links">
          <a href="/login">Login</a>
          <a href="/">Signup</a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
