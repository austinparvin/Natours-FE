import logo from "../logo-white.png";
import "./Nav.scss";
import Hamburger from "./hamburger/Hamburger";

function Nav() {
  return (
    <nav className="top-nav">
      <Hamburger className="hamburger" />
      <div className="header-links">
        <div className="left-nav-links">
          <a className="header-link" href="/">
            All Tours
          </a>
          <a className="header-link" href="/me">
            My Tours
          </a>
        </div>
        <div className="nav-logo">
          <img src={logo} className="logo" alt="Natours logo" />
        </div>
        <div className="right-nav-links">
          <a className="header-link" href="/login">
            Login
          </a>
          <a className="header-link" href="/signup">
            Signup
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
