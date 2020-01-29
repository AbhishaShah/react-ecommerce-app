import React, {Component} from "react";
import {Link} from "react-router-dom";
import logo from "../logo.png";
import {ButtonContainer} from "./Button";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar navbar-expnad-sm navbar-dark px-sm-5 ">
        <Link to="/">
          <img height="50" src={logo} alt="Home" className="navbar-brand" />
        </Link>
        {/* 
https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk */}
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Products
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fa fa-cart-plus"></i>
            </span>
            My Cart
          </ButtonContainer>
        </Link>
      </div>
    );
  }
}
