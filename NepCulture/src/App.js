import React from "react";
// import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Blogs from "./components/pages/Blogs";
import Footer from "./components/Footer";

// import Services from './components/pages/Services';
// import Products from './components/pages/Products';

import Signin from "./components/pages/Signin";
import SignUp from "./components/pages/Signup";
import Exhibition from "./components/pages/Exhibition";
import Profile from "./components/pages/Profile";
import Itemdetail from "./components/Itemdetail";
import Blogdetail from "./components/Blogdetail";
import Activate from "./components/pages/Activate";
import Reset_password from "./components/pages/Reset_password";
import Reset_password_confirm from "./components/pages/Reset_password_confirm";
import ItemBuy from "./components/ItemBuy";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import store from "./store";
import Layout from "./hocs/Layout";
import ProductBanner from "./components/pages/user_product/productbanner";
import Seller_product_list from "./components/pages/Seller_product_list/Seller_product_list";

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Layout />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/blogs" component={Blogs} />
            <Route path="/user_product" component={ProductBanner} />
            <Route path="/sign-in" component={Signin} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/exhibition" component={Exhibition} />
            <Route path="/profile" component={Profile} />
            <Route path="/seller_product_list" component={Seller_product_list} />
            <Route path="/item_detail/:id" component={Itemdetail} />
            <Route path="/blog_detail" component={Blogdetail} />
            <Route path="/itembuy" component={ItemBuy} />
            <Route path="/main-cart-section" component={Cart} />
            <Route path="/reset-password" component={Reset_password} />
            <Route
              path="/password/reset/confirm/:uid/:token"
              component={Reset_password_confirm}
            />
            <Route path="/activate/:uid/:token" component={Activate} />
          </Switch>
          <Footer />
        </Router>
      </Provider>
    </>
  );
}

export default App;
