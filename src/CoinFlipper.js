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

    if (coins[rand] === "head") {
      this.setState(currState => ({
        numHead: currState.numHead + 1
      }));
    } else {
      this.setState(currState => ({
        numTail: currState.numTail + 1
      }));
    }

    this.setState(currState => ({
      currCoin: (currState.currCoin = coins[rand])
    }));

    this.setState(currState => ({
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
