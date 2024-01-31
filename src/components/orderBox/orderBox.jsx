import Image from "next/image";
import au from "../../assets/images/AU.png";
import MainOrderTable from "../tables/MainOrderTable";
import Link from "next/link";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import OffcanvasComponent from "../offcanvas/RightOffcanvas";
import Input from "../inputs/Input";

function OrderBox({
  selected,
  status,
  type,
  btnAdded,
  btnContent,
  statusCountent,
  statusColor,
}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="orderBox">
      <OffcanvasComponent
        plasment={"end"}
        close={handleClose}
        component={
          <div className="d-flex flex-column ">
            <div>
              <div className="customerName">
                <h4>Customer: Tony Saprano</h4>
              </div>
              <div className="d-flex customerData justify-content-between">
                <div className="d-flex flex-column">
                  <p className="whatData m-0">Contact Information</p>
                  <p className="m-0">asiclari@gmail.com +68423877</p>
                </div>
                <div className="d-flex flex-column">
                  <p className="whatData m-0">Shipping Address</p>
                  <p className="m-0">
                    230 Sydney Road New South Wales Australia 2000
                  </p>
                </div>
              </div>
              <div className="mt-3">
                <Input
                  classes={"form-control"}
                  holder={"ex.6852314"}
                  label={"Tax ID number"}
                  type={"number"}
                />
              </div>
            </div>
            <div className="shippingBtns  d-flex align-items-center end ">
              <div className="btnWithIcon  mx-2">
                <button className="btn" onClick={handleClose}>
                  Cancel
                </button>
              </div>
              <div className="importsBtns">
                <button className="editBtn btn">Save</button>
              </div>
            </div>
          </div>
        }
        w={"w-25"}
        showState={show}
      />
      <div className="orderBoxHeading d-flex justify-content-between align-items-center">
        <div className="d-flex orderBoxHeadingLeft  ">
          <div className="ordersNumber">
            <label class="control control-checkbox  d-flex align-items-center ">
              <p className="m-0 mt-1"> Order</p> <span className="">#1011</span>
              <input type="checkbox" />
              <div class="control_indicator"></div>
            </label>
          </div>
          <div className="orderSerial">
            <p> 03. 16.2020</p>
          </div>
          <div className="ordersPrice">
            <p>$99.98 USD</p>
          </div>
          <div className="d-flex align-items-center">
            <p className="mx-2">Customer:</p>

            <div className="ordersCustomer">
              <div className="customerInfo d-flex align-items-center ">
                <Image src={au} />
                <h5>
                  <Link href="#" onClick={handleShow}>
                    Tony Soprano
                  </Link>
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="orderAllProducts">
          <button className={statusColor}>
            {selected ? "Place order" : "Order all products"}
          </button>
        </div>
      </div>
      <MainOrderTable
        selected={selected}
        status={status}
        type={type}
        btnAdded={btnAdded}
        btnContent={btnContent}
        statusCountent={statusCountent}
      />
      <MainOrderTable
        selected={selected}
        status={status}
        type={type}
        btnAdded={btnAdded}
        btnContent={btnContent}
        statusCountent={statusCountent}
      />
    </div>
  );
}

export default OrderBox;
