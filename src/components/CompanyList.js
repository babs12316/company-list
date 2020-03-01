import React, { Component } from "react";
//import "./App.css";
import { numberFormat } from "../NumerFormat";
//import customers from  '../data.json';
import axios from "axios";
import { Link } from "react-router-dom";
//import CompanyList from './components/CompanyList';
class CompanyList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: [],
      show: false
    };
  }
  componentDidMount() {
    axios
      .get(`https://my-json-server.typicode.com/babs12316/demo123/posts`)
      .then(res => {
        this.setState({ companies: res.data });
      });
  }
  handleShow = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div className="container">
        <h2>Companies list</h2>
        {this.state.companies.map(company => (
          <Link to={`/${company.id}`} key={company.id}>
            <div className="card">
              <div className="title">{company.name}</div>
              <div className="pdate">
                <span>Date:</span> {company.date_of_first_purchase}
              </div>
              <div className="budget">
                <span>Budget:</span>
                {numberFormat(company.budget)}{" "}
              </div>
              <div className="sbudget">
                <span>Budget Spent:</span> {numberFormat(company.budget_spent)}
              </div>
              <div className="rbudget">
                <span>Remaning budget:</span>{" "}
                {numberFormat(company.budget - company.budget_spent)}
              </div>
            </div>
          </Link>
        ))}
      </div>
    );
  }
}

export default CompanyList;
