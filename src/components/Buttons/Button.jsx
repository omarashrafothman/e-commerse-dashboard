import React from "react";

function Button({ content, classes, type, click }) {
  return (
    <button className={classes} type={type}>
      {content}
    </button>
  );
}

export default Button;
