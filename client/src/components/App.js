import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import MensDenim from "./views/Pages/Mens/MenDenimPage";
import MensShirts from "./views/Pages/Mens/MensShirts";
import MensTshirts from "./views/Pages/Mens/MensTshirts";
import MensShoes from "./views/Pages/Mens/MensShoes";
import HomePage from "./views/HomePage/HomePage"; 
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer";
import UploadProductPage from "./views/UploadProductPage/UploadProductPage";
import DetailProductPage from "./views/DetailProductPage/DetailProductPage";
import CartPage from "./views/Cart/Cart";
import AboutPage from "./views/Cart/About";
import {connect} from 'react-redux'
//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

const App=()=> {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavBar />
      <div style={{ paddingTop: "69px", minHeight: "calc(100vh - 80px)" }}>
        <Switch>
          <Route exact path="/Mens/Denim" component={Auth(MensDenim, null)} />
          <Route exact path="/Mens/shirts" component={Auth(MensShirts, null)} />
          <Route
            exact
            path="/Mens/tshirts"
            component={Auth(MensTshirts, null)}
          />
          <Route exact path="/Mens/shoes" component={Auth(MensShoes, null)} />
          <Route
            exact
            path="/:category/:subcategory/:title/:id"
            component={Auth(DetailProductPage, null)}
          />
          <Route exact path="/" component={Auth(HomePage, null)} />
          <Route exact path="/cart" component={Auth(CartPage, null)} />
          <Route exact path="/about" component={Auth(AboutPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route
            exact
            path="/product/upload"
            component={Auth(UploadProductPage, true)}
          />
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default connect()(App);
