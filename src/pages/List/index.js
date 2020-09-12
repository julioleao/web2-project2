import React, { Component } from "react";
import Axios from "axios";
import Cards from "../../components/Cards";
import logo from "../../assets/logo.png";

import "./style.css";

export default class List extends Component {
  state = {
    cards: [],
    query: "",
    loading: false,
    message: "",
    cancel: "",
  };
  

  fetchSearchResults = (query) => {
    const url = `https://api.pokemontcg.io/v1/cards?name=${query}`;
    if (this.cancel) {
      this.cancel.cancel();
    }

    this.cancel = Axios.CancelToken.source();
    Axios.get(url, { cancelToken: this.cancel.token })
      .then((res) => {
        this.setState({ cards: res.data.cards });
      })
      .catch((error) => {
        if (Axios.isCancel(error) || error) {
          this.setState({
            loading: false,
            message: "Falha ao encontrar o valor digitado",
          });
        }
      });
  };

  handleOnInputChange = (e) => {
    const query = e.target.value;
    this.setState({ query, loading: true, message: "" }, () => {
      this.fetchSearchResults(query);
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="d-flex justify-content-center mb-5 mt-5">
          <img src={logo} alt="cur" height={350} width={700} />
        </div>

        <div className="input-group md-form form-sm form-2 pl-0">
          <input
            className="form-control my-0 py-1 amber-border"
            type="text"
            placeholder="Search"
            aria-label="Search"
            onChange={this.handleOnInputChange}
          />
          <div className="input-group-append">
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
