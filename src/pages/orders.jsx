import React from "react";
import Button from "../components/Buttons/Button";
import TitleHeader from "@/components/titleHeader/TitleHeader";
import Input from "../components/inputs/Input";
import Image from "next/image";
import OrderBox from "@/components/orderBox/orderBox";
import { useState, useEffect } from "react";

import OffcanvasComponent from "../components/offcanvas/RightOffcanvas";
import shippingMethod from "../assets/images/webp/Featured icon (1).png";
import dangerIcon from "../assets/icons/Featured icon (3).png";
import productImage from "../assets/images/webp/product.webp";

// edge  start
export const runtime = "experimental-edge"; // 'nodejs' is the default
export const dynamic = "force-dynamic"; // static by default, unless reading the request

export function GET(request) {
  return new Response(`Hello from ${process.env.VERCEL_REGION}`);
}
// edge  end

export default function orders() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  function handleShow() {
    setShow(true);
  }

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

  const [show6, setShowSix] = useState(true);
  const handleClose6 = () => setShowSix(false);
  const handleShow6 = () => setShowSix(true);

  const [show7, setShowSeven] = useState(true);
  const handleClose7 = () => setShowSeven(false);
  const handleShow7 = () => setShowSeven(true);

  const [show8, setShowEight] = useState(true);
  const handleClose8 = () => setShowEight(false);
  const handleShow8 = () => setShowEight(true);

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    document.title = "Orders";
  }, []);
  return (
    <div className="main grayBgColor">
      <div className=" ">
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
          w={"smallModal"}
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
          w={"smallModal"}
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
          w={"smallModal"}
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
          w={"smallModal"}
          showState={show4}
        />
        <OffcanvasComponent
          plasment={"end"}
          close={handleClose6}
          component={
            <div>
              <div>
                <Image src={shippingMethod} />
              </div>
              <br />
              <div className="shippingMethods">
                <h4>Available shipping methods</h4>
                <p>
                  The selected shipping method is displayed in the price table.
                  This is provided be the supplier and based on your country
                  selection and a standard delivery method (eg ePacket).
                </p>
              </div>
              <br />
              <br />

              <div className="shippingData d-flex flex-column">
                <div className="shippingDataHeader d-flex align-items-center justify-content-between">
                  <p>Shipping Method</p>
                  <p>Estimated Delivery Time</p>
                  <p>Shipping Cost</p>
                  <p>Tracking</p>
                </div>
                <div className="shippingDataBody d-flex flex-column">
                  <div className="shippingDataBodyItem d-flex align-items-center justify-content-between">
                    <div>
                      <div class="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="ePacket"
                          id="ePacket"
                        />
                        <label class="form-check-label" for="ePacket">
                          ePacket
                        </label>
                      </div>
                    </div>
                    <p className=" leftBack">37-37 days</p>
                    <p className="m-0">US $0</p>
                    <div className="mx-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="20"
                        viewBox="0 0 22 20"
                        fill="none"
                      >
                        <rect
                          x="-0.00976562"
                          width="22.0194"
                          height="20"
                          rx="10"
                          fill="#D1FADF"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M15.6757 6.15838L9.1066 11.9167L7.3634 10.2251C7.04228 9.95005 6.53767 9.93338 6.17068 10.1667C5.81286 10.4084 5.71194 10.8334 5.93214 11.1751L7.99646 14.2251C8.1983 14.5084 8.54694 14.6834 8.94146 14.6834C9.31762 14.6834 9.67544 14.5084 9.87728 14.2251C10.2076 13.8334 16.5106 7.00838 16.5106 7.00838C17.3364 6.24172 16.3363 5.56672 15.6757 6.15005V6.15838Z"
                          fill="#12B76A"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="shippingDataBodyItem d-flex align-items-center justify-content-between">
                    <div>
                      <div class="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="ePacket"
                          id="ePacket"
                        />
                        <label class="form-check-label" for="ePacket">
                          ePacket
                        </label>
                      </div>
                    </div>
                    <p className=" leftBack">37-37 days</p>
                    <p className="m-0">US $0</p>
                    <div className="mx-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="20"
                        viewBox="0 0 22 20"
                        fill="none"
                      >
                        <rect
                          x="-0.00976562"
                          width="22.0194"
                          height="20"
                          rx="10"
                          fill="#D1FADF"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M15.6757 6.15838L9.1066 11.9167L7.3634 10.2251C7.04228 9.95005 6.53767 9.93338 6.17068 10.1667C5.81286 10.4084 5.71194 10.8334 5.93214 11.1751L7.99646 14.2251C8.1983 14.5084 8.54694 14.6834 8.94146 14.6834C9.31762 14.6834 9.67544 14.5084 9.87728 14.2251C10.2076 13.8334 16.5106 7.00838 16.5106 7.00838C17.3364 6.24172 16.3363 5.56672 15.6757 6.15005V6.15838Z"
                          fill="#12B76A"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="shippingDataBodyItem d-flex align-items-center justify-content-between">
                    <div>
                      <div class="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="ePacket"
                          id="ePacket"
                        />
                        <label class="form-check-label" for="ePacket">
                          ePacket
                        </label>
                      </div>
                    </div>
                    <p className=" leftBack">37-37 days</p>
                    <p className="m-0">US $0</p>
                    <div className="mx-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="20"
                        viewBox="0 0 22 20"
                        fill="none"
                      >
                        <rect
                          x="-0.00976562"
                          width="22.0194"
                          height="20"
                          rx="10"
                          fill="#D1FADF"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M15.6757 6.15838L9.1066 11.9167L7.3634 10.2251C7.04228 9.95005 6.53767 9.93338 6.17068 10.1667C5.81286 10.4084 5.71194 10.8334 5.93214 11.1751L7.99646 14.2251C8.1983 14.5084 8.54694 14.6834 8.94146 14.6834C9.31762 14.6834 9.67544 14.5084 9.87728 14.2251C10.2076 13.8334 16.5106 7.00838 16.5106 7.00838C17.3364 6.24172 16.3363 5.56672 15.6757 6.15005V6.15838Z"
                          fill="#12B76A"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="shippingDataBodyItem d-flex align-items-center justify-content-between">
                    <div>
                      <div class="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="ePacket"
                          id="ePacket"
                          checked={true}
                        />
                        <label class="form-check-label" for="ePacket">
                          ePacket
                        </label>
                      </div>
                    </div>
                    <p className=" leftBack">37-37 days</p>
                    <p className="m-0">US $0</p>
                    <div className="mx-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="20"
                        viewBox="0 0 22 20"
                        fill="none"
                      >
                        <rect
                          x="-0.00976562"
                          width="22.0194"
                          height="20"
                          rx="10"
                          fill="#D1FADF"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M15.6757 6.15838L9.1066 11.9167L7.3634 10.2251C7.04228 9.95005 6.53767 9.93338 6.17068 10.1667C5.81286 10.4084 5.71194 10.8334 5.93214 11.1751L7.99646 14.2251C8.1983 14.5084 8.54694 14.6834 8.94146 14.6834C9.31762 14.6834 9.67544 14.5084 9.87728 14.2251C10.2076 13.8334 16.5106 7.00838 16.5106 7.00838C17.3364 6.24172 16.3363 5.56672 15.6757 6.15005V6.15838Z"
                          fill="#12B76A"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="shippingBtns  d-flex align-items-center ">
                <div className="btnWithIcon  mx-2">
                  <button className="btn" onClick={handleClose}>
                    Cancel
                  </button>
                </div>
                <div className="importsBtns">
                  <button className="editBtn btn" onClick={handleShow}>
                    Ok
                  </button>
                </div>
              </div>
            </div>
          }
          w={"bigModal"}
          showState={show6}
        />
        <OffcanvasComponent
          plasment={"end"}
          close={handleClose7}
          component={
            <div className="shipped">
              <h4>Marked as Shipped</h4>
              <p>
                Supplier:<span> BestStore Store</span>
              </p>
              <div className="shippedBox d-flex justify-content-between text-align-center">
                <div className=" d-flex align-items-center">
                  <div className="d-flex align-items-center imageShippeBox ">
                    <Image src={productImage} />
                  </div>
                  <p>Easy salad cutter bowl</p>
                </div>

                <div className="d-flex align-items-center outOf">
                  <Input type={"number"} value={1} />
                  <p className="">out of 1</p>
                </div>
              </div>
              <div className="shippedBox d-flex justify-content-between text-align-center">
                <div className=" d-flex align-items-center">
                  <div className="d-flex align-items-center imageShippeBox ">
                    <Image src={productImage} />
                  </div>
                  <p>Easy salad cutter bowl</p>
                </div>

                <div className="d-flex align-items-center outOf">
                  <Input type={"number"} value={1} />
                  <p>out of 1</p>
                </div>
              </div>
              <div className="shippedBox d-flex justify-content-between text-align-center">
                <div className=" d-flex align-items-center">
                  <div className="d-flex align-items-center imageShippeBox ">
                    <Image src={productImage} />
                  </div>
                  <p>Easy salad cutter bowl</p>
                </div>

                <div className="d-flex align-items-center outOf">
                  <Input type={"number"} value={1} />
                  <p>out of 1</p>
                </div>
              </div>
              <div className="shippedBox d-flex justify-content-between text-align-center">
                <div className=" d-flex align-items-center">
                  <div className="d-flex align-items-center imageShippeBox ">
                    <Image src={productImage} />
                  </div>
                  <p>Easy salad cutter bowl</p>
                </div>

                <div className="d-flex align-items-center outOf">
                  <Input type={"number"} value={1} />
                  <p>out of 1</p>
                </div>
              </div>
              <div className="w-75 d-flex flex-column">
                <Input
                  label={"Tracking number"}
                  holder={"Enter tracking number"}
                  type={"text"}
                  id={"trackingNumber"}
                />
              </div>
              <div class="form-check ">
                <input
                  class="form-check-input "
                  type="checkbox"
                  id="flexSwitchCheckChecked"
                  checked
                />
                <label htmlFor="flexSwitchCheckChecked">
                  Send a notification email to the customer
                </label>
              </div>
              <br />
              <br />
              <div className="shippingBtns  d-flex align-items-center ">
                <div className="btnWithIcon  mx-2">
                  <button className="btn" onClick={handleClose7}>
                    Cancel
                  </button>
                </div>
                <div className="importsBtns">
                  <button className="editBtn btn" onClick={handleShow}>
                    Mark as shipped
                  </button>
                </div>
              </div>
            </div>
          }
          w={"smallModal"}
          showState={show7}
        />
        <OffcanvasComponent
          plasment={"end"}
          close={handleClose8}
          component={
            <div>
              <div className="shippingMethods">
                <h4>Product Override</h4>
                <p>
                  Overriding the product in this order will allow you to fulfill
                  this order with a different supplier. There will be no changes
                  to your product title, URL, description, variants, or prices
                  in your store.
                </p>
              </div>
              <br />
              <br />
              <p className="m-0">Override with:</p>
              <div className="w-50 mx-4 my-3">
                <div className="searchBox  w-100">
                  <span className="searchSvgIcon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                    >
                      <path
                        d="M17.7637 17.5L14.1387 13.875M16.097 9.16667C16.097 12.8486 13.1122 15.8333 9.43034 15.8333C5.74844 15.8333 2.76367 12.8486 2.76367 9.16667C2.76367 5.48477 5.74844 2.5 9.43034 2.5C13.1122 2.5 16.097 5.48477 16.097 9.16667Z"
                        stroke="#667085"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  <div class="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search for items"
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                    />
                  </div>
                </div>
              </div>
              <p>Variant:</p>
              <div className="d-flex align-items-center   salad">
                <div>
                  <Image src={productImage} />
                </div>
                <p className="saladContent">Easy salad cutter bowl</p>
              </div>{" "}
              <br />
              <br />
              <div className="generalOrderItem d-flex ">
                <label class="control control-checkbox  ">
                  <input type="checkbox" />
                  <div class="control_indicator"></div>
                </label>

                <div className="generalOrderItemData d-flex flex-column">
                  <h4>Override all unfulfilled orders</h4>
                  <p className="m-0">
                    Orders that you receive in the future will not be affected.
                  </p>
                </div>
              </div>
              <br />
              <br />
              <div className="shippingBtns  d-flex align-items-center ">
                <div className="btnWithIcon  mx-2">
                  <button className="btn" onClick={handleClose8}>
                    Cancel
                  </button>
                </div>
                <div className="importsBtns">
                  <button className="editBtn btn" onClick={handleShow8}>
                    Ok
                  </button>
                </div>
              </div>
            </div>
          }
          w={"bigModal"}
          showState={show8}
        />
      </div>
      <div className="container3 ">
        <TitleHeader title={"Orders"} />
        <div className="container1 ">
          <div className="mainContent">
            <div className="orderBigWidget d-flex align-items-center  justify-content-between">
              <div className="orderBigWidgetText d-flex align-items-center flex-wrap">
                <div className="orderNumber">
                  <h4>2</h4>
                </div>
                <div className="d-flex flex-column orderBigWidgetTextMain">
                  <h3>Orders from suppliers have been found.</h3>
                  <p>Save time by processing up to 1000 orders at once</p>
                </div>
              </div>
              <div
                className="btnBox"
                onClick={() => {
                  handleCheckboxChange();
                }}
              >
                <Button content={"Order all products"} classes={"btn"} />
              </div>
            </div>
            <div className="tablesContainer">
              <div className="orderSearchBox d-flex  align-items-center ">
                <div className="searchBox mt-4 ">
                  <span className="searchSvgIcon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                    >
                      <path
                        d="M17.7637 17.5L14.1387 13.875M16.097 9.16667C16.097 12.8486 13.1122 15.8333 9.43034 15.8333C5.74844 15.8333 2.76367 12.8486 2.76367 9.16667C2.76367 5.48477 5.74844 2.5 9.43034 2.5C13.1122 2.5 16.097 5.48477 16.097 9.16667Z"
                        stroke="#667085"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  <div class="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search for orders or products"
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                    />
                  </div>
                </div>
                <button className="btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                  >
                    <path
                      d="M14.5 13.3335L9.83333 13.3335M7.16667 13.3335L2.5 13.3335M14.5 8.00016L8.5 8.00016M5.83333 8.00016L2.5 8.00016M14.5 2.66683L11.1667 2.66683M8.5 2.66683L2.5 2.66683M9.83333 15.3335L9.83333 11.3335M5.83333 10.0002L5.83333 6.00016M11.1667 4.66683L11.1667 0.66683"
                      stroke="#344054"
                      stroke-width="1.33333"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
              {isChecked ? (
                <div className="d-flex align-items-center justify-content-between total">
                  <div className="orderTotal">
                    <p>
                      Order total :<span className="pink">$84.97 USD</span>
                    </p>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="orderTotal totalItem">
                      <p>
                        Subtotal :<span className="">$12.68</span>
                      </p>
                    </div>
                    <div className="orderTotal totalItem">
                      <p>
                        Shipping :<span className="">$12.68</span>
                      </p>
                    </div>
                    <div className="orderTotal totalItem">
                      <p>
                        Total :<span className="pink">$30.04 USD</span>
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
              <OrderBox
                handle={handleCheckboxChange}
                selected={isChecked}
                statusCountent={"To order"}
                status={"statusBox toOrder"}
                statusColor={"btn toOrder2"}
                bttStatus={"toOrder"}
              />
              <OrderBox
                handle={handleCheckboxChange}
                selected={isChecked}
                statusCountent={"Awaiting Payment"}
                status={"statusBox Awaiting"}
                statusColor={"btn Awaiting2"}
                bttStatus={"Awaiting"}
              />
              <OrderBox
                handle={handleCheckboxChange}
                selected={isChecked}
                statusCountent={"In Processing"}
                status={"statusBox Processing"}
                statusColor={"btn Processing2"}
                btnAdded={<button className="btn">hello</button>}
                bttStatus={"Processing"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
