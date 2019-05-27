import React, { Component } from "react";
import SearchBook from "./getTitle";

class App extends Component {
  state = {
    data: null,
    search: ""
  };

  // callBackendAPI = async () => {
  //   console.log(this.state.search);
  //   const response = await fetch("/title");
  //   const body = await response.json();

  //   if (response.status !== 200) {
  //     throw Error(body.message);
  //   }
  //   return body;
  // };

  handleSearchFill = title => {
    this.setState({ search: title });
    console.log(title);
    this.callBackendAPI(title);
  };

  render() {
    return (
      <div>
        <SearchBook searchFill={this.handleSearchFill} />
        <p>{this.state.search}</p>
      </div>
    );
  }
}

export default App;
