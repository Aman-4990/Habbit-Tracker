import avatar from "../imgs/avatar.png";
// import signout from "../imgs/avatar.png";

import { toggleTab } from "../actions";
import { connect } from "react-redux";
import React from "react";

class Sidebar extends React.Component {
  componentDidMount() {
    console.log("Component did mount in Sidebar");
  }
  handleDashboardTab = (boolVal) => {
    const { dispatch } = this.props;
    console.log(this.props);
    dispatch(toggleTab(boolVal));
  };
  render() {
    const { dashbordTab } = this.props;
    return (
      <div>
        <div className="user-con">
          <img src= {avatar}alt="" />
        </div>
        <div className="text">
          <h2></h2>
        </div>
        <div>
          <div>
            <p
              className={`sideBarTexts ${dashbordTab ? "active" : ""} `}
              onClick={() => this.handleDashboardTab(true)}
            >
              Dashboard
            </p>
            <p
              className={`sideBarTexts ${dashbordTab ? "" : "active"}  `}
              onClick={() => this.handleDashboardTab(false)}
            >
              Show week view
            </p>
          </div>
        </div>
      </div>
    );
  }
}
// callback function to set the properties
function callback(state) {
  return {
    dashbordTab: state.dashbordTab,
  };
}
const connectedComponent = connect(callback)(Sidebar);
export default connectedComponent;