import React from "react";
import ProfileLayout from "./layout";
import { Input } from "@mui/base";
function Deactivateaccount() {
  return (
    <ProfileLayout>
      <div className="profileForm deactivateaccount">
        <div className="billingAddressHeader">
          <h5>Deactivate account</h5>
        </div>
        <p className="pOne">
          For extra security, this requires you to confirm you email
        </p>
        <div className="d-flex align-items-center">
          <div>
            <input
              className="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
            />
          </div>
          <p className="p2">I confirm my account deactivation</p>
        </div>
        <div className="deleteAndEdit my-3">
          <button className="btn delete">Deactivate account</button>
        </div>
      </div>
    </ProfileLayout>
  );
}

export default Deactivateaccount;
