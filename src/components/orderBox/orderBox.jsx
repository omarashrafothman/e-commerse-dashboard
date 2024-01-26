import Image from "next/image";
import au from "../../assets/images/AU.png";
import MainOrderTable from "../tables/MainOrderTable";
import Link from "next/link";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Input from "../inputs/Input";
import OffcanvasComponent from "../offcanvas/RightOffcanvas";
import dangerIcon from "../../assets/icons/Featured icon (3).png";
function OrderBox({ selected }) {
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
      <div className=" ">
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
        <OffcanvasComponent
          plasment={"end"}
          close={handleClose2}
          component={
            <div className="d-flex flex-column ">
              <div>
                <div className="customerName">
                  <h4>Add order number</h4>
                </div>
                <div className="customerData">
                  <p className="m-0 whatData">
                    Add AliExpress or CJ Dropshipping order number if you
                    manually ordered items on these suppliers. Learn more about
                    order fulfillment in DS Ninja.
                  </p>
                </div>
                <div className="mt-3">
                  <Input
                    classes={"form-control"}
                    holder={"ex.6852314"}
                    label={"Order number"}
                    type={"number"}
                  />
                </div>
              </div>
              <div className="shippingBtns  d-flex align-items-center end ">
                <div className="btnWithIcon  mx-2">
                  <button className="btn" onClick={handleClose2}>
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
          showState={show2}
        />

        <OffcanvasComponent
          plasment={"end"}
          close={handleClose3}
          component={
            <div className="d-flex flex-column ">
              <div>
                <div className="customerName">
                  <h4>Edit order number</h4>
                </div>
                <div className="customerData">
                  <p className="m-0 whatData">
                    Are you sure to change the order number #1894174518972?
                  </p>
                </div>
                <div className="mt-3">
                  <Input
                    classes={"form-control"}
                    holder={"ex.6852314"}
                    label={"New number"}
                    type={"number"}
                  />
                </div>
              </div>
              <div className="shippingBtns  d-flex align-items-center end ">
                <div className="btnWithIcon  mx-2">
                  <button className="btn" onClick={handleClose3}>
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
          showState={show3}
        />

        <OffcanvasComponent
          plasment={"end"}
          close={handleClose5}
          component={
            <div className="d-flex flex-column ">
              <div>
                <div className="customerName">
                  <h4>Add note</h4>
                </div>
                <div className="customerData">
                  <p className="m-0 whatData">
                    Note is visible only in DS Ninja
                  </p>
                </div>
                <div className="mt-3">
                  <Input
                    classes={"form-control"}
                    holder={"ex.hellothere"}
                    label={"Enter note"}
                    type={"number"}
                  />
                </div>
              </div>
              <div className="shippingBtns  d-flex align-items-center end ">
                <div className="btnWithIcon  mx-2">
                  <button className="btn" onClick={handleClose4}>
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
          showState={show5}
        />
        <OffcanvasComponent
          plasment={"end"}
          close={handleClose4}
          component={
            <div>
              <div className="ProductStatisticsContainer d-flex flex-column">
                <div className="ProductStatisticsIcon">
                  <Image src={dangerIcon} />
                </div>
                <div>
                  <h3 className="ProductStatisticsHeading">
                    Delete order number
                  </h3>
                </div>
                <div className="my-2">
                  <p className="m-0">
                    Are you sure you want to delete the order number?
                  </p>
                </div>
              </div>
              <br />
              <br />
              <br />
              <div className="d-flex justify-content-end cancelAndDelete">
                <div className="deleteAndEdit d-flex align-items-center">
                  <div className="btnWithIcon  mx-2">
                    <button className="btn" onClick={handleClose5}>
                      Cancel
                    </button>
                  </div>
                  <button className="btn delete">Delete</button>
                </div>
              </div>
            </div>
          }
          w={"w-25"}
          showState={show4}
        />
      </div>
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
