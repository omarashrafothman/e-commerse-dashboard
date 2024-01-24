import React from "react";

function InputWithIcon({
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
  icon,
}) {
  return (
    <div className="input-group  d-flex flex-column mainInput withIcon">
      <div className="input-group-prepend ">
        <label for={id}>{label}</label>
      </div>

      <div>
        <span className="iconInInput">{icon}</span>
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

export default InputWithIcon;
