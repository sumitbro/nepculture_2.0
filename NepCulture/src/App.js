import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Blogs from './components/pages/Blogs';
import Footer from './components/Footer';


// import Services from './components/pages/Services';
// import Products from './components/pages/Products';


import SignUp from './components/pages/SignUp';
import Exhibition from './components/pages/Exhibition';
import Profile from './components/pages/Profile';
import Itemdetail from './components/Itemdetail';
import Blogdetail from './components/Blogdetail';

import ItemBuy from './components/ItemBuy';
import Cart from './components/Cart';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/blogs' component={Blogs} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/exhibition' component={Exhibition} />
          <Route path='/profile' component={Profile} />
          <Route path='/item_detail' component={Itemdetail} />
          <Route path='/blog_detail' component={Blogdetail} />
          <Route path='/itembuy' component={ItemBuy} />
          <Route path='/main-cart-section' component={Cart} />
        </Switch>
        <Footer />
      </Router>

    </>
  );
}

export default App;