import React from "react";
import Layout from "./layout";
import Link from "next/link";
import Image from "next/image";
import trash from "../../assets/icons/trash.png";
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
              <input className="form-check-input" type="radio" />
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
      <div className="inputsBox">
        <div className="d-flex flex-column w-25">
          <div className="selectBox d-flex align-items-center ">
            <select class="form-select" aria-label="Default select example">
              <option value="1" selected>
                Global
              </option>
              <option value="2">11 Hours</option>
              <option value="3">10 Hours</option>
            </select>
            <div className="deleteSelect">
              <Image src={trash} />
            </div>
          </div>
          <div className="selectInside my-2">
            <div className="selectBox my-2 d-flex align-items-center">
              <select class="form-select" aria-label="Default select example">
                <option value="1" selected>
                  4PXRT72-PACKET-PACKET
                </option>
                <option value="2">11 Hours</option>
                <option value="3">10 Hours</option>
              </select>{" "}
              <div className="deleteSelect">
                <Image src={trash} />
              </div>
            </div>
            <div className="selectBox my-2 d-flex align-items-center">
              <select class="form-select" aria-label="Default select example">
                <option value="1" selected>
                  Add more shipping method
                </option>
                <option value="2">11 Hours</option>
                <option value="3">10 Hours</option>
              </select>{" "}
              <div className="deleteSelect">
                <Image src={trash} />
              </div>
            </div>
          </div>
          <div className="selectBox d-flex align-items-center">
            <select class="form-select" aria-label="Default select example">
              <option value="1" selected>
                Choose country
              </option>
              <option value="2">11 Hours</option>
              <option value="3">10 Hours</option>
            </select>{" "}
            <div className="deleteSelect">
              <Image src={trash} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default shipping;
