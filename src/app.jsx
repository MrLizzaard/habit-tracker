import React, { Component } from "react";
import Habits from "./components/habits";
import Navbar from "./components/navbar";
import "./app.css";

class App extends Component {
  render() {
    return (
      <>
        <Navbar></Navbar>
        <input className="input" type="text" placeholder="Habit" />
        <button className="addBtn">Add</button>
        <li className="habit">
          <Habits />
        </li>
        <button className="resetBtn">Reset All</button>
      </>
    );
  }
}

export default App;
