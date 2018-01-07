import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { add } from "../actions/basket";
import { priceFormatter } from "../utils/formatter";
import "./Product.css";

const Product = ({ image, name, code, price, add }) => (
  <div className="product">
    <img className="productImage" src={image} alt={name} />
    <div className="productFooter">
      <div className="productInfo">
        <p>
          <span className="productName">{name}</span>
          <span className="productCode">({code})</span>
        </p>
        <p className="productPrice">£{priceFormatter(price)}</p>
      </div>
      <button
        onClick={() => add({ name, code, price, image })}
        className="addToBasket"
      >
        <span>+</span>
      </button>
    </div>
  </div>
);

Product.propTypes = {
  item: PropTypes.object
};

Product.defaultProps = {
  item: {}
};

export default connect(null, { add })(Product);
