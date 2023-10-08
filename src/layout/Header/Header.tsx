import {NavLink} from "react-router-dom";

import logo from "../../assets/logo.svg";
import "./style.css";


const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <nav className="nav">
            <NavLink to="/">
              <img src={logo} alt="MAPPED" />
            </NavLink>
            <ul className="list">
              <li className="item user">
                <NavLink to="/profile" className="link">
                  ACCOUNT
                </NavLink>
              </li>
              <li className="item world">
                <NavLink to="/planets" className="link">
                  PLANETS
                </NavLink>
              </li>
              <li className="item marker">
                <NavLink to="/pins" className="link">
                  PINS
                </NavLink>
              </li>
              <li className="item search">
                <NavLink to="/signup" className="link">
                  SIGN UP
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
