import React, { useState, useEffect, Fragment } from "react";
import { Button } from "./Button";
import { Link, Redirect } from "react-router-dom";
import "./Navbar.css";
import { logout } from "../actions/auth";
import { connect } from "react-redux";
function Navbar({ logout, isAuthenticated }) {
  const [redirect, setRedirect] = useState(false);
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  const guestlink = () => (
    
      <Button buttonStyle="btn--outline">Login / Register</Button>
    
  );
  
  const authlink = () => (
    
    
    
    <Button onClick={logout_user} buttonStyle="btn--outline">
      LogOut
    </Button>
  );

  const logout_user = () => {
    logout();
    setRedirect(true);
};


  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            NepCulture &nbsp;
            <i class="fas fa-meteor" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <div className="nav-contents">
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/blogs"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Blogs
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/exhibition"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Exhibition
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/profile"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  <i class="fas fa-user-circle" />
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/main-cart-section"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  <i class="fas fa-cart-plus" />
                </Link>
              </li>
            </ul>
          </div>

          {/* <Button onClick={logout} buttonStyle="btn--outline">
            LogOut
          </Button> */}
          {isAuthenticated?authlink():guestlink()}
        </div>
      </nav>
      {redirect ? <Redirect to='/' /> : <></>}
    </>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(Navbar);
