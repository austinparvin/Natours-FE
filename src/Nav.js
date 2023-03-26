import logo from "./logo-white.png";
import "./App.scss";
import Hamburger from "./Hamburger";

function Nav() {
  return (
    <header className="App-header">
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
          <a href="/">Login</a>
          <a href="/">Signup</a>
        </div>
      </div>
    </header>
  );
}

export default Nav;
