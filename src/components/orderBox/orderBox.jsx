import React from "react";
import Image from "next/image";
import au from "../../assets/images/AU.png";
import MainOrderTable from "../tables/MainOrderTable";

function OrderBox() {
  return (
    <div className="orderBox">
      <div className="orderBoxHeading d-flex justify-content-between align-items-center">
        <div className="d-flex orderBoxHeadingLeft  ">
          <div className="ordersNumber">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label d-flex" for="flexCheckDefault">
                <p> Order</p> <span>#1011</span>
              </label>
            </div>
          </div>
          <div className="orderSerial">
            <p> 03. 16.2020</p>
          </div>
          <div className="ordersPrice">
            <p>$99.98 USD</p>
          </div>
          <div className="ordersCustomer">
            <p className="mx-2">Customer:</p>
            <div className="customerInfo d-flex  ">
              <Image src={au} />
              <h5>Tony Soprano</h5>
            </div>
          </div>
        </div>
        <div className="orderAllProducts">
          <button className="btn">Order all products</button>
        </div>
      </div>
      <MainOrderTable />
      <MainOrderTable />
    </div>
  );
}

export default OrderBox;
