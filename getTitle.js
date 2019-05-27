import React, { Component } from "react";
import axios from "axios";

class SearchBook extends Component {
  constructor(props) {
    super(props);
    this.state = { book: "", author: "" };
  }

  changeBook = input => {
    this.setState({ book: input });
  };

  submitBook = () => {
    let title = this.state.book;
    this.setState({ book: title });
    console.log(title);
    axios.get("http://localhost:9000/getBooks/" + title).then(res => {
      let results = res.data;
      this.setState({ author: results });
    });
  };

  reset = () => {
    this.setState({ book: "", author: "" });
    console.log(this.state);
  };

  render() {
    return (
      <div>
        {this.state.author !== "" ? (
          <div>
            <h1>
              The author of {this.state.book} is {this.state.author}
            </h1>
            <button onClick={this.reset}> New Query </button>
          </div>
        ) : (
          <div>
            <input
              type="text"
              placeholder=" Select Book "
              onChange={e => this.changeBook(e.target.value)}
            />
            <button onClick={this.submitBook}> Submit </button>
          </div>
        )}
      </div>
    );
  }
}

export default SearchBook;
