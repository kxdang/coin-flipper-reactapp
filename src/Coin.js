import React, { Component } from "react";

export default class Coin extends Component {
  render() {
    return (
      <div>
        {this.props.coinType === "head" ? (
          <img
            style={{ width: "10%", height: "auto" }}
            src="https://upload.wikimedia.org/wikipedia/en/e/e0/Canadian_Dollar_-_obverse.png"
            alt={this.props.coinType}
          />
        ) : (
          ""
        )}
        {this.props.coinType === "tail" ? (
          <img
            style={{ width: "10%", height: "auto" }}
            src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ef/Canadian_Dollar_-_reverse.png/220px-Canadian_Dollar_-_reverse.png"
            alt={this.props.coinType}
          />
        ) : (
          ""
        )}

        {/*    <img
            style={{ width: "10%", height: "auto" }}
            alt="tail"
          />*/}
      </div>
    );
  }
}
