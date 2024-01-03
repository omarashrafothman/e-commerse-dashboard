import React, { Component } from "react";

export class DropupBtn extends Component {
  render() {
    return (
      <div class="btn-group dropup">
        <button
          type="button"
          class="btn btn-secondary dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Dropup
        </button>
        <div class="dropdown-menu"></div>
      </div>
    );
  }
}

export default DropupBtn;
