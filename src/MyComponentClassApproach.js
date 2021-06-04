import React from "react";
class MyComponent extends React.Component {
  UpdateText() {
    document.getElementById("output").innerText =
      document.getElementById("inputTextbox").value;
  }
  render() {
    return (
      <div>
        <input id="inputTextbox"></input>
        <button type="button" onClick={this.UpdateText}>
          Update
        </button>
        <br />
        <label id="output"></label>
      </div>
    );
  }
}
export default MyComponent;
