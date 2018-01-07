import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { priceFormatter } from "../utils/formatter";
import { getBasketTotal, getDeliveryCost } from "../utils/basket";
import MiniProduct from "./MiniProduct";
import "./Basket.css";

class Basket extends Component {
  static propTypes = {
    items: PropTypes.array
  };

  static defaultProps = {
    items: []
  };

  state = {
    total: 0,
    delivery: 0
  };

  componentWillMount() {
    this._updateTotals(this.props.items);
  }

  componentWillReceiveProps(nextProps) {
    this._updateTotals(nextProps.items);
  }

  render() {
    return (
      <section className="basket">
        <h2>My Basket</h2>
        {this.props.items.map((item, index) => (
          <MiniProduct key={index} {...item} />
        ))}
        <p className="basketDelivery">
          <i className="fa fa-truck" aria-hidden="true" /> Delivery charges: £{
            this.state.delivery
          }
        </p>
        <hr />
        <div className="basketTotal">
          <p>Total:</p>
          <p>
            <span>£{this.state.total}</span>
          </p>
        </div>
        <button className="basketCheckout">
          <span>Checkout</span>
        </button>
      </section>
    );
  }
  _updateTotals = items => {
    const total = priceFormatter(getBasketTotal(items));
    const delivery = getDeliveryCost(total);
    this.setState({ total, delivery });
  };
}

const mapStateToProps = state => ({
  items: state.basket
});

export default connect(mapStateToProps)(Basket);
