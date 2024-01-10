import React from "react";
import Layout from "./layout";
import Link from "next/link";

function shipping() {
  return (
    <Layout>
      <div className="generalOrderItem">
        <div className="generalOrderItem d-flex ">
          <div class="form-check form-switch">
            <input
              class="form-check-input "
              type="checkbox"
              id="flexSwitchCheckChecked"
            />
          </div>
          <div className="generalOrderItemData d-flex flex-column">
            <h4>Shipping</h4>
            <p>Set up your default shippping method for specific country.</p>
          </div>
        </div>
        <div className="leftRightBtnBox my-3">
          <button className="leftBtn">
            <Link href="#">AliExpress</Link>
          </button>
          <button className="rightBtn">
            <Link href="#">CJ</Link>
          </button>
        </div>
        <div className="generalContent">
          <div className="d-flex flex-column boxWithRadio">
            <div className="d-flex  radioBox">
              <input type="radio" className="" />
              <div className="d-flex flex-column">
                <label>Add global shipping method card</label>
                <p>
                  Set up your shipping method for global countries. Auto order
                  system will choose shipping method according to your setting
                  while placing orders. Option 1 will be your first choice
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default shipping;
