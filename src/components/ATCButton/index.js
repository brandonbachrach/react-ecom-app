import React, { Component } from "react";
import "./index.scss";

export default class ATCButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <h1>{this.constructor.name}</h1>
      </>
    );
  }
}
