import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getBasketQty } from "../utils/basket";
import "./Header.css";

const Header = props => {
  return (
    <header className="header">
      <h1>{props.title}</h1>
      <button
        className="headerBasket"
        onClick={() => {
          props.toggleBasket();
        }}
      >
        <i className="fa fa-shopping-basket" aria-hidden="true" />
        <span className="headerBasketQty">{getBasketQty(props.items)}</span>
      </button>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array
};

Header.defaultProps = {
  title: "Default Title",
  items: []
};

const mapStateToProps = state => ({
  items: state.basket
});

export default connect(mapStateToProps)(Header);
