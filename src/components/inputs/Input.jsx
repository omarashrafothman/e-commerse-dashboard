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
  id,
}) {
  return (
    <div class="input-group  d-flex flex-column mainInput">
      <div class="input-group-prepend ">
        <label for={id}>{label}</label>
      </div>

      <div>
        <input
          type={type}
          name={name}
          id={id}
          placeholder={holder}
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
