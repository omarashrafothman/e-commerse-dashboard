import React from "react";
import Image from "next/image";
import bag from "../../assets/icons/icons8-aliexpress 1.png";
import product from "../../assets/images/product.png";
import { Select } from "@mui/material";
function MainOrderTable() {
  return (
    <div className="">
      <thead>
        <tr className="d-flex toprow">
          <th>
            <div className="toOrder statusBox  ">
              <span className="statusFlag toOrder2"></span> <p>To order</p>
            </div>
          </th>
          <th>
            <div className="lifeStore d-flex align-items-center">
              <Image src={bag} />
              <p>Magical life’s Store</p>
            </div>
          </th>
          <th>
            <div>
              <p>All order no:</p>
            </div>
          </th>
          <th>
            <div>
              <p>Tracking no:</p>
            </div>
          </th>
        </tr>
      </thead>
      <table className="mainOrderTable">
        <tr>
          <td className="">
            <div className="d-flex align-items-center justify-content-between">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <div className="orderImage">
                <Image src={product} />
              </div>
              <div className="d-flex flex-column tableProductDetails">
                <h6>Easy salad cutter bowl</h6>
                <p>54654648-United-States</p>
              </div>
            </div>
          </td>
          <td>
            <div className="country">
              <p>United States / for iphone 0.9m</p>
            </div>
          </td>
          <td>
            <div className="orderPrice">
              <p>1 X $40.99 USD</p>
            </div>
          </td>
          <td>
            <div>
              <select class="form-select" aria-label="Default select example">
                <option value="1" selected>
                  More Actions
                </option>
                <option value="2">delete</option>
                <option value="3">add</option>
              </select>
            </div>
          </td>
        </tr>
        <tr>
          <td className="">
            <div className="d-flex align-items-center justify-content-between">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <div className="orderImage">
                <Image src={product} />
              </div>
              <div className="d-flex flex-column tableProductDetails">
                <h6>Easy salad cutter bowl</h6>
                <p>54654648-United-States</p>
              </div>
            </div>
          </td>
          <td>
            <div className="country">
              <p>United States / for iphone 0.9m</p>
            </div>
          </td>
          <td>
            <div className="orderPrice">
              <p>1 X $40.99 USD</p>
            </div>
          </td>
          <td>
            <div>
              <select class="form-select" aria-label="Default select example">
                <option value="1" selected>
                  More Actions
                </option>
                <option value="2">delete</option>
                <option value="3">add</option>
              </select>
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default MainOrderTable;
