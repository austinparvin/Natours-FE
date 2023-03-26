const Hamburger = ({ className }) => {
  return (
    <div className={className} id="menuToggle">
      <input type="checkbox" />

      <span></span>
      <span></span>
      <span></span>

      <ul id="menu">
        <a href="/">
          <li>All Tours</li>
        </a>
        <a href="/">
          <li>My Tours</li>
        </a>
        <a href="/">
          <li>Login</li>
        </a>
        <a href="/">
          <li>Signup</li>
        </a>
      </ul>
    </div>
  );
};

export default Hamburger;
