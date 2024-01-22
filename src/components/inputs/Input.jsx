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
    <div className="input-group  d-flex flex-column mainInput">
      <div className="input-group-prepend ">
        <label for={id}>{label}</label>
      </div>

      <div>
        <input
          classes={classes}
          type={type}
          name={name}
          id={id}
          placeholder={holder}
          aria-label="Default"
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
