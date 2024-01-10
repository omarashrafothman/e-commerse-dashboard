import React from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";
import Image from "next/image";
import help from "../../assets/icons/help-circle.png";

import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
function PhoneNumberInput({ label }) {
  const [value, setValue] = useState();
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      This is a tooltip
    </Tooltip>
  );
  return (
    <div>
      <label className="phoneNumberLabel">{label}</label>
      <PhoneInput
        // defaultCountry="US"
        placeholder="+1 (555) 000-0000"
        value={value}
        onChange={setValue}
        international={true}
      />
      <span className="toolipBox">
        <Tooltip id="button-tooltip">This is a tooltip</Tooltip>
        <OverlayTrigger
          placement="left"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip}
        >
          <button className="btn">
            <Image src={help} />
          </button>
        </OverlayTrigger>
      </span>
    </div>
  );
}

export default PhoneNumberInput;
