import React, { Component } from "react";
import "./App.css";
import CompanyList from "./components/CompanyList";
class App extends Component {
  render() {
    return (
      <div className="container">
        <CompanyList></CompanyList>
      </div>
    );
  }
}

export default App;
