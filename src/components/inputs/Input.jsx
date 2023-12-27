import React from "react";

function Input({ type, holder, name, label }) {
  return (
    <div class="input-group mb-3 d-flex flex-column mainInput">
      <div class="input-group-prepend my-2">
        <label for={name}>{label}</label>
      </div>

      <div>
        <input
          type={type}
          name={name}
          placeholder={holder}
          className="form-control"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </div>
    </div>
  );
}

export default Input;
