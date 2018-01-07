import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Product from "./Product";
import { loadProducts } from "../actions/productList";
import "./List.css";

class List extends Component {
  static propTypes = {
    productList: PropTypes.array
  };
  static defaultProps = {
    productList: []
  };
  componentDidMount() {
    this.props.loadProducts();
  }
  render() {
    return (
      <section className="list">
        {this.props.productList.length ? (
          this._renderProducts()
        ) : (
          <p>Loading...</p>
        )}
      </section>
    );
  }
  _renderProducts = () =>
    this.props.productList.map((item, index) => (
      <Product key={index} {...item} />
    ));
}

const mapStateToProps = state => ({
  productList: state.productList
});

export default connect(mapStateToProps, { loadProducts })(List);
