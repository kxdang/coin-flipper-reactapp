import React, { Component } from "react";
import Coin from "./Coin";

export default class CoinFlipper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numFlips: 0,
      numHead: 0,
      numTail: 0,
      currCoin: "head"
    };

    this.flipCoin = this.flipCoin.bind(this);
  }

  flipCoin(e) {
    const coins = ["head", "tail"];
    const rand = Math.floor(Math.random() * 2);

    this.setState(currState => ({
      currCoin: (currState.currCoin = coins[rand]),
      numHead:
        coins[rand] === "head" ? currState.numHead + 1 : currState.numHead + 0,
      numTail:
        coins[rand] === "tail" ? currState.numTail + 1 : currState.numTail + 0,
      numFlips: currState.numFlips + 1
    }));
  }

  render() {
    return (
      <div>
        <Coin coinType={this.state.currCoin} />
        <button onClick={this.flipCoin}>Flip Coin</button>
        <p>
          Out of {this.state.numFlips}, there have been {this.state.numHead}{" "}
          heads and {this.state.numTail} tails
        </p>
      </div>
    );
  }
}
