import React from "react";

class Clock extends React.Component {
  state = {
    curDT: new Date().toLocaleString(),
  };
  render() {
    return (
      <div className="App">
        <p> {this.state.curDT}</p>
      </div>
    );
  }
}

export default Clock;
