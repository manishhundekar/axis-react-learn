import React, { Component } from "react";

export default class Table extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "React Class State", desc: "Stateful component" };
    //this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    console.log(this.state);
    this.setState((initialState) => ({ name: "React Class State Changed" }));
  }

  //   handleChange = () => {
  //     console.log(this.state)
  //     this.setState((initialState) => (
  //         {name : "React Class State Changed"}
  //     ))
  //   }

  render() {
    return (
      <div>
        <h2>{this.state.name}</h2>
        <button onClick={this.handleChange}>CLICK HERE TO CHANGE STATE</button>
      </div>
    );
  }
}
