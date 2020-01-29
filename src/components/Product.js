import React, {Component} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {ProductConsumer} from "../context";
import PropTypes from "prop-types";

export default class Product extends Component {
  render() {
    const {id, title, img, price, inCart} = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <div className="img-container p-5" onClick={() => console.log("click item")}>
            <Link to="/details">
              <img src={img} alt={title} className="card-img-top" />
            </Link>
            <button
              className="cart-btn mb-2"
              disabled={inCart ? true : false}
              onClick={() => console.log("added to cart")}>
              {inCart ? (
                <p className="text-capitalize mb-0" disabled>
                  In Cart
                </p>
              ) : (
                <i className=" fa fa-cart-plus"></i>
              )}
            </button>
          </div>
          {/* card - footer */}
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0">{title}</p>
            <h5 className="font-italic text-red mb-0 price-label">
              <span className="text-center">${price}</span>
            </h5>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
};

const ProductWrapper = styled.section`
  .card {
    border-color: transparent;
    transition: all 1s linear;
  }
  .card-footer {
    color: var(--mainWhite);
    background: var(--darkRed);
    borer-top: transparent;
    transition: all 1s linear;
  }
  .price-label {
    background: var(--mainWhite);
    padding: 10px;
    border-radius: 0.1rem;
    font-weight: bold;
    border-top: 0px;
    min-width: 55px;
    text-align: center;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      box-shadow: 2px 5px 5px 0px rgba(0, 0, 0, 0.2);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 1s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }
  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.8rem;
    border: 0px;
    background: var(--darkRed);
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 1s linear;
  }
  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }
  .cart-btn:hover {
    color: var(--mainDark);
  }
  .cart-btn:focus {
    outline: none;
  }
`;
