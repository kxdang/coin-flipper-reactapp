import React, { Component } from "react";

export default class Coin extends Component {
  render() {
    return (
      <div>
        {this.props.coinType === "head" ? (
          <img
            style={{ width: "10%", height: "auto" }}
            src="https://tinyurl.com/react-coin-heads-jpg"
            alt={this.props.coinType}
          />
        ) : (
          ""
        )}
        {this.props.coinType === "tail" ? (
          <img
            style={{ width: "10%", height: "auto" }}
            src="http://www.pcgscoinfacts.com/UserImages/71009269r.jpg?__cf_chl_jschl_tk__=55f472b01f8ce124957c2327d16ec40f5467d61f-1583164275-0-ARPox93W1oWQ24o_PsJb3bSZ5HCbe1pHFmZYe4JtZQ11XFyp1EQZ91FNYXZmQakpoPJ1zMX9grk1ynbu06CWoVRukq6HmNpr9flmTjwlLGChW5v-Nnw_Fe9v2VGvAnrQ5tYPVtUKVhp5D3ZcIyNVqy5lSp2rKC2BEdD0vyprFTWe7-bwDHo-wrQB1rZ21Fv5EdMgFWu_fKvQLIoZDF-QAMf-nEiGXK6nAfspnm6MsPsnVt-PhBqb3bNV9zCez9yTeGyaIjR9Eed0kWNK7qe-shINASyIQrqxgs0v-k4Suj8RLlhqj0CJsnbtvwXGXwJzQw"
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
