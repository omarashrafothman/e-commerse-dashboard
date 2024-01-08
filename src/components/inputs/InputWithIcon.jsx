import React from "react";
import Image from "next/image";

function InputWithIcon({
  type,
  holder,
  name,
  label,
  value,
  change,
  blur,
  classes,
  icon,
}) {
  return (
    <div class="input-group mb-3 d-flex flex-column">
      <div class="input-group-prepend">
        <label for={name}>{label}</label>

        <span class="input-group-text" id="basic-addon1">
          {icon}
        </span>
      </div>
      <input
        type={type}
        class={classes}
        placeholder={holder}
        aria-describedby="basic-addon1"
        name={name}
        value={value}
      />
    </div>
  );
}

export default InputWithIcon;
