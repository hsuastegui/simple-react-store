import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { update } from "../actions/basket";
import { priceFormatter } from "../utils/formatter";
import { INCREASE, DECREASE } from "../utils/constants";
import "./MiniProduct.css";

const MiniProduct = ({ image, name, code, price, qty, update }) => (
  <div className="miniProduct">
    <img className="miniProductImage" src={image} alt={name} />
    <div className="miniProductInfo">
      <p>
        <span className="miniProductName">{name}</span>
        <span className="miniProductCode">({code})</span>
      </p>
      <p className="miniProductPrice">£{priceFormatter(price)}</p>
    </div>
    <div className="miniProductQtyInfo">
      <button
        onClick={() => update({ code, action: DECREASE })}
        className="decrease"
      >
        <span>-</span>
      </button>
      <span className="miniProductQty">{qty}</span>
      <button
        onClick={() => update({ code, action: INCREASE })}
        className="increase"
      >
        <span>+</span>
      </button>
    </div>
  </div>
);

MiniProduct.propTypes = {
  item: PropTypes.object
};

MiniProduct.defaultProps = {
  item: {}
};

export default connect(null, { update })(MiniProduct);
