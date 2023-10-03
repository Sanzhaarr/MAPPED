import "./styles/header.css";
import logo from "../assets/logo.svg";

function Header() {
  return (
    <>
      <header className="header">
        <div className="container">
          <nav className="nav">
            <img src={logo} alt="MAPPED" />
            <ul className="list">
              <li className="item user">
                <a href="/" className="link">
                  ACCOUNT
                </a>
              </li>
              <li className="item world">
                <a href="/" className="link">
                  PLANETS
                </a>
              </li>
              <li className="item marker">
                <a href="/" className="link">
                  PINS
                </a>
              </li>
              <li className="item search">
                <a href="/" className="link">
                  SEARCH
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
