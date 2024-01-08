import React from "react";

function Input({
  type,
  holder,
  name,
  label,
  value,
  change,
  blur,
  classes,
  accept,
}) {
  return (
    <div class="input-group  d-flex flex-column mainInput">
      <div class="input-group-prepend mb-2">
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
          accept={accept}
        />
      </div>
    </div>
  );
}

export default Input;
