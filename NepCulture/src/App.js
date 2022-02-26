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
import Activate from './components/pages/Activate';
import Reset_password from './components/pages/Reset_password';
import Reset_password_confirm from './components/pages/Reset_password_confirm';
import ItemBuy from './components/ItemBuy';
import Cart from './components/Cart';
import {Provider} from 'react-redux';
import store from './store';

function App() {
  return (
    <>
    <Provider store={store}>
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
          <Route  path='/reset-password' component={Reset_password} />
          <Route  path='/password/reset/confirm/:uid/:token' component={Reset_password_confirm} />
          <Route  path='/activate/:uid/:token' component={Activate} />
        </Switch>
        <Footer />
      </Router>
      </Provider>

    </>
  );
}

export default App;