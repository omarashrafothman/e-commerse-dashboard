import React from "react";
import Image from "next/image";
import bag from "../../assets/icons/icons8-aliexpress 1.png";
import product from "../../assets/images/webp/product.webp";

function MainOrderTable({
  selected,
  type,
  btnAdded,
  status,
  btnContent,
  statusCountent,
}) {
  return (
    <div className="">
      <thead>
        <tr className="d-flex toprow align-items-center mb-2">
          <th>
            <div className={status}>
              <span className="statusFlag toOrder2"></span>
              <p className="">{statusCountent}</p>
            </div>
          </th>
          <th>
            <div className="lifeStore d-flex align-items-center">
              <Image src={bag} />
              <p className="pb">Magical life’s Store</p>
            </div>
          </th>
          <th>
            <div>
              <p className="pb">All order no:</p>
            </div>
          </th>
          <th>
            <div>
              <p className="pb">Tracking no:</p>
            </div>
          </th>
        </tr>
      </thead>
      <table className="mainOrderTable ttable">
        <tr className="orderRow">
          <td className="">
            <div className="d-flex align-items-center justify-content-between">
              <label class="control control-checkbox  ">
                <input type="checkbox" />
                <div class="control_indicator"></div>
              </label>
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
        <tr className="orderRow">
          <td className="">
            <div className="d-flex align-items-center justify-content-between">
              <label class="control control-checkbox  ">
                <input type="checkbox" />
                <div class="control_indicator"></div>
              </label>
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
