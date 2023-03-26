import logo from "./logo-white.png";
import "./App.scss";

function Nav() {
  return (
    <header className="App-header">
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
    </header>
  );
}

export default Nav;
