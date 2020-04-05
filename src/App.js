import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Shop from './components/Shop/Shop';
import Cart from './components/Cart/Cart'
import NotFound from './components/NotFound/NotFound';
import ProductDetails from './components/ProductDetails/ProductDetails'


function App() {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Router>
        <Switch>
            <Route path="/shop">
              <Shop></Shop>
            </Route>
            <Route path="/cart">
              <Cart></Cart>
            </Route>
            <Route path="/:productKey">
              <ProductDetails></ProductDetails>
            </Route>
            <Route exact path="/">
              <Shop></Shop>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
