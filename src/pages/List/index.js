import React, { Component } from "react";
import Axios from "axios";
import Cards from "../../components/Cards";
import logo from "../../assets/logo.png";

import "./style.css";

export default class List extends Component {
  state = {
    cards: [],
  };

  componentDidMount() {
    Axios.get("https://api.pokemontcg.io/v1/cards?name=charizard").then(
      (res) => {
        console.log(res.data);
        this.setState({ cards: res.data.cards });
      }
    );
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="d-flex justify-content-center mb-5 mt-5">
          <img src={logo} alt="cur" height={350} width={700} />
        </div>

        <div class="input-group md-form form-sm form-2 pl-0">
          <input
            class="form-control my-0 py-1 amber-border"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
          <div class="input-group-append">
            <span className="input-group-text amber lighten-3" id="basic-text1">
              <i className="fa fa-search" aria-hidden="true"></i>
            </span>
          </div>
        </div>
        <div className="row">
          {this.state.cards.map((cards, index) => (
            <Cards key={index} cards={cards} />
          ))}
        </div>
      </div>
    );
  }
}
