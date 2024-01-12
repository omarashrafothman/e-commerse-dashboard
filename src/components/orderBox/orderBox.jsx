import Image from "next/image";
import au from "../../assets/images/AU.png";
import MainOrderTable from "../tables/MainOrderTable";
import Link from "next/link";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";

function OrderBox({ selected }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="orderBox">
      <div className=" ">
        <Offcanvas
          show={show}
          onHide={handleClose}
          placement={"end"}
          className="w-50 "
        >
          <div>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title></Offcanvas.Title>
            </Offcanvas.Header>
          </div>
          <Offcanvas.Body></Offcanvas.Body>
        </Offcanvas>
      </div>
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
              <h5>
                <Link href="#" onClick={handleShow}>
                  Tony Soprano
                </Link>
              </h5>
            </div>
          </div>
        </div>
        <div className="orderAllProducts">
          <button className="btn">
            {selected ? "Place order" : "Order all products"}
          </button>
        </div>
      </div>
      <MainOrderTable selected={selected} />
      <MainOrderTable selected={selected} />
    </div>
  );
}

export default OrderBox;
