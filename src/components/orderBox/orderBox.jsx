import Image from "next/image";
import au from "../../assets/images/AU.png";
import MainOrderTable from "../tables/MainOrderTable";
import Link from "next/link";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";

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

  const [show2, setShowTwo] = useState(true);
  const handleClose2 = () => setShowTwo(false);
  const handleShow2 = () => setShowTwo(true);

  const [show3, setShowThree] = useState(true);
  const handleClose3 = () => setShowThree(false);
  const handleShow3 = () => setShowThree(true);

  const [show4, setShowFour] = useState(true);
  const handleClose4 = () => setShowFour(false);
  const handleShow4 = () => setShowFour(true);

  const [show5, setShowFive] = useState(true);
  const handleClose5 = () => setShowFive(false);
  const handleShow5 = () => setShowFive(true);

  return (
    <div className="orderBox">
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
