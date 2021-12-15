import React, { Component } from "react";
import axios from "axios";
import Result from "./Result";
import NoResult from "./NoResult";
import "../App.css";

class Search extends Component {
  constructor(props) {
    super(props);
    this.formbg = {
      height: "250px",
      width: "500px",
      padding: "20px",
      margin: "20px auto auto",
      display: "block",
    };
    this.state = {
      namesList: [],
      imgUrlList: [],
      value: "",
      showResult: false,
      showNoResult: false,
      valueIndex: -1,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const completeState = { ...this.state };
    completeState.value = event.target.value;
    this.setState(completeState);
  }

  handleSubmit(event) {
    const completeState = { ...this.state };
    completeState.valueIndex = completeState.namesList.indexOf(
      completeState.value
    );
    if (completeState.valueIndex < 0) {
      completeState.showResult = false;
      completeState.showNoResult = true;
    } else {
      completeState.showResult = true;
      completeState.showNoResult = false;
    }

    this.setState(completeState);
    event.preventDefault(); // return false;
  }

  componentDidMount() {
    axios.get("https://thronesapi.com/api/v2/Characters").then((response) => {
      let data = response.data;
      let arr1 = [];
      let arr2 = [];
      data.forEach((element) => {
        arr1.push(element.fullName);
        arr2.push(element.imageUrl);
      });
      this.setState({ namesList: arr1, imgUrlList: arr2 });
    });
  }

  render() {
    return (
      <div>
        <h2 className="m-2 text-center">Game of Thrones Charecter Info</h2>
        <div className="container-sm border rounded bg-light search-container">
          <form onSubmit={this.handleSubmit} className="p-3">
            <div className="mb-3 ">
              <label htmlFor="char" className="form-label ">
                Charecter Name
              </label>
              <input
                className="form-control w-75"
                name="char"
                id="char"
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
                required
              />
              <div id="Help" className="form-text">
                Enetr full name of the Charecter <i>(Eg. Daenerys Targaryen)</i>
                .
              </div>
            </div>

            <div className="mb-3">
              <button
                type="submit"
                name="getInfoBtn"
                className="btn btn-primary search-btn"
              >
                Get Info
              </button>
            </div>
          </form>

          {this.state.showResult ? (
            <Result
              name={this.state.namesList[this.state.valueIndex]}
              img={this.state.imgUrlList[this.state.valueIndex]}
            />
          ) : this.state.showNoResult ? (
            <NoResult />
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default Search;
