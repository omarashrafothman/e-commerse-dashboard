import React from "react";
import Image from "next/image";
import help from "../../assets/icons/help-circle (1).png";

function WarningBox() {
  return (
    <div className="warningBox d-flex align-items-center">
      <div className="helpIconBox">
        <Image src={help} />
      </div>
      <div>
        <p className="m-0 warning">
          Compare at price needs to be higher than price. We will leave the
          compare at price empty If it violates this rule.
        </p>
      </div>
    </div>
  );
}

export default WarningBox;
