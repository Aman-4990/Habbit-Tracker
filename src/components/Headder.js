import { connect } from "react-redux";
import { useState } from "react";
import { addhabbit } from "../actions";

debugger;
function Headder(props) {
  const [inputVal, setInputVal] = useState("");
  function handleInput(e) {
    if (e.target === "enter") {
      addhabbitfun();
    } else {
      const text = e.target.value;
      setInputVal(text);
    }
  }
  const addhabbitfun = () => {
    const text = inputVal.trim();
    if (text.length === 0) {
      console.log("INPUT can't be empty");
    } else {
      const habit = {
        title: text,
        fav: false,
        daylist: [0, 0, 0, 0, 0, 0, 0],
      };

      const { dispatch } = props;
      dispatch(addhabbit(habit));
      setInputVal("");
      document.getElementById("input").value = "";
    }
    return;
  };
  return (
    <div className="headder">
      <h5 style={{ marginLeft: "25px" }}>HOME</h5>
      <div
        style={{
          display: "flex",
          // flexDirection: "column",
          height: "30px",
          alignSelf: "center",
        }}
      >
        <input type="text" onChange={handleInput} id="input" />
        <button onClick={addhabbitfun}>Add Habbit</button>
      </div>
    </div>
  );
}

// callback function to set the props

function callback(state) {
  return {};
}

const connectedComponent = connect(callback)(Headder);
export default connectedComponent;