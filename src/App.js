import "./App.css";
import Habbitcontainer from "./components/habbitfolder/Habbitcontainer";
import Headder from "./components/Headder";
import Sidebar from "./components/Sidebar";
import React from "react";
import { connect } from "react-redux";

class App extends React.Component {
  componentDidMount() {
    console.log(this.props, "in App");
  }

  render() {
    return (
      <div className="App">
        <Headder />
        <div className="main-container">
          <div className="sidebar">
            <h1>Navigation</h1>
            <Sidebar />
          </div>{" "}
          <div className="habbit-container">
            <h1>All ur habbits</h1>
            <Habbitcontainer />
          </div>
        </div>
      </div>
    );
  }
}

function callback(state) {
  return {
    habbits: state.habbits,
  };
}
const connectedComponent = connect(callback)(App);
export default connectedComponent;