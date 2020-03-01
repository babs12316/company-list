import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router";
import { Button, Modal } from "react-bootstrap";

class CompanyDetail extends Component {
  state = {
    name: "",
    budget: "",
    budgetSpent: "",
    toHome: false,
    show: true
  };

  handleClose = () => {
    this.setState({ show: false, toHome: true });
  };
  handleShow = () => {
    this.setState({ show: true });
  };
  handleChange = event => {
    this.setState({ budget: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const updatedBudget = this.state.budget;
    if (updatedBudget < this.state.budgetSpent) {
      alert(
        "Value entered is less than spent budget. Please make sure entered value is greater than spent budget"
      );
    } else {
      const id = this.props.match.params.id;

      axios
        .patch(
          `https://my-json-server.typicode.com/babs12316/demo123/posts/${id}`,
          { budget: this.state.budget }
        )
        .then(res => {
          this.setState({ companies: res.data.company, toHome: true });
          console.log(res.data);
          alert("Data send to backend. Check console to see the result");
        });
    }
  };

  componentDidMount() {
    const id = this.props.match.params.id;

    axios
      .get(`https://my-json-server.typicode.com/babs12316/demo123/posts/${id}`)
      .then(res => {
        this.setState({
          name: res.data.name,
          budget: res.data.budget,
          budgetSpent: res.data.budget_spent
        });
      });
  }

  render() {
    if (this.state.toHome === true) {
      return <Redirect to="/" />;
    }
    return (
      <div id="modal">
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h6>Edit budget value</h6>

            <input
              type="text"
              value={this.state.budget}
              onChange={this.handleChange}
            ></input>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.handleSubmit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default CompanyDetail;
