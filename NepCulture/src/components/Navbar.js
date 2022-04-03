import React, { useState, useEffect, Fragment } from "react";
import { Button } from "./Button";
import { Link, Redirect, useHistory } from "react-router-dom";
import "./Navbar.css";
import { logout } from "../actions/auth";
import { connect, useSelector, useDispatch } from "react-redux";
import get_cart from "../actions/cart_actions"


let tokenparse = [];
let tokenready = false;
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


  const { cart, loadingcart } = useSelector((state) => state.cartReducer)
  const { access } = useSelector((state) => state.auth)

  const [keyword, setkeyword] = useState("");
  const navigate = useHistory()


  const dispatch= useDispatch()


  const search = (e, actionkey) => {
    if (actionkey === "pressed enter") {
      if (e.keyword === 13) {
        navigate('/product/', { state: { keyword: keyword, category: "" } });
      }

    } else {
      navigate('/product/', { state: { keyword: keyword, category: "" } })
    }
  }


  useEffect(() => {
    if (access !== null && access !== "undefined") {
      tokenparse = (access);
      console.log(tokenparse)
      tokenready = (access !== null && access !== "undefined")
      dispatch(get_cart(tokenparse?.id))
    }
  }, [dispatch, access])


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
                  to="/user_product"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  User_product
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
              {/* <li className="nav-item">
                <Link
                  to="/about"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  About
                </Link>
              </li> */}
              {isAuthenticated ?
                <li className="nav-item">
                  <Link
                    to="/profile"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    <i class="fas fa-user-circle" />
                  </Link>
                </li> : ""
              }

              <li className="nav-item">
                <Link
                  to="/main-cart-section" state={{ cartId: cart?.id }}
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  <i class="fas fa-cart-plus" />
                  {!loadingcart ? tokenready ? cart?.quantity !== 0 ? <div>
                  <span>{cart?.quantity}</span>
                </div> : <span></span> : <span></span> : <span>0</span>}
                 
                  {/* <span>10</span> */}
                </Link>
                
              </li>
            </ul>
          </div>

          {/* <Button onClick={logout} buttonStyle="btn--outline">
            LogOut
          </Button> */}
          {isAuthenticated ? authlink() : guestlink()}
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
