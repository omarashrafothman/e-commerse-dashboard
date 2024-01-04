import React from "react";

function Input({ type, holder, name, label, value, change, blur, classes }) {
  return (
    <div class="input-group mb-2 d-flex flex-column mainInput">
      <div class="input-group-prepend my-2">
        <label for={name}>{label}</label>
      </div>

      <div>
        <input
          type={type}
          name={name}
          placeholder={holder}
          className={classes}
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          value={value}
          onChange={change}
          onBlur={blur}
        />
      </div>
    </div>
  );
}

export default Input;
