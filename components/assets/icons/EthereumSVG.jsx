import React, { Component } from "react";

export default class EthereumSVG extends Component {
  render() {
    return (
      <svg className="h-4 w-4">
        <use xlinkHref="/icons.svg#icon-ETH"></use>
      </svg>
    );
  }
}
