import React from "react";
import ReactDOM from "react-dom";

import Graph from "./Graph";

import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Graph />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
