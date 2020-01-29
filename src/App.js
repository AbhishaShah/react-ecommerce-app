import React from "react";
import {Switch, Route} from "react-router-dom";
//import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import NotFoundPage from "./components/NotFoundPage";

class App extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <Switch>
          <Route path="/" component={ProductList} exact></Route>
          <Route path="/details" component={ProductDetails} exact></Route>
          <Route path="/cart" component={Cart} exact></Route>
          <Route component={NotFoundPage}></Route>
        </Switch>
      </>
    );
  }
}

export default App;
