import React, { Component } from "react";
import Header from "./Header";
import List from "./List";
import Basket from "./Basket";
import "./App.css";

class App extends Component {
  state = {
    toggle: false
  };

  render() {
    return (
      <div className={`app ${this.state.toggle ? "show" : ""}`}>
        <Header
          title="Simple Fashion"
          toggleBasket={() => this.setState({ toggle: !this.state.toggle })}
        />
        <section className="appContainer">
          <main className="appContent">
            <h2>Shop</h2>
            <List />
          </main>
          <Basket />
        </section>
      </div>
    );
  }
}

export default App;
