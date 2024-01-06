import React from "react";
import Form from "react-bootstrap/Form";
function select({ size, selectedOption }) {
  return (
    <div>
      <select class="form-select" aria-label="Default select example">
        <option value="1" selected>
          {selectedOption}
        </option>
        <option value="2">30 - 60 Days</option>
        <option value="3">All Time</option>
      </select>
    </div>
  );
}

export default select;
