import React from "react";
import Habbit from "./habbit";
import Progress from "./Progress";
import { connect } from "react-redux";

class Habbitcontainer extends React.Component {
  render() {
    const { habbits, dashbordTab } = this.props;
    return (
      <div className="hbt-container">
        {dashbordTab
          ? habbits.map((habit, index) => (
              <Habbit key={`habit${index}`} habit={habit} />
            ))
          : habbits.map((habit, index) => (
              <Progress key={`habit${index}`} habit={habit} />
            ))}
      </div>
    );
  }
}

function callback(state) {
  return {
    habbits: state.habbits,
    dashbordTab: state.dashbordTab,
  };
}
const connectedComponent = connect(callback)(Habbitcontainer);
export default connectedComponent;