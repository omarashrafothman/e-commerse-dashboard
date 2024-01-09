import React from "react";
import Image from "next/image";
import close from "../../assets/icons/x (1).png";
import Link from "next/link";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import featuredIcon from "../../assets/icons/Featured icon (2).png";
import badge from "../../assets/icons/Badge.png";
import arrowLeft from "../../assets/icons/arrow-left black.png";
import arrowRight from "../../assets/icons/arrow-right black.png";
import { NavLink } from "react-bootstrap";
import arrowDown from "../../assets/icons/arrow-down.png";
import Input from "../inputs/Input";
import dangerIcon from "../../assets/icons/Featured icon (3).png";

function InboxItem({ statusClases, statusImage, data }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);
  const closeCanvas = () => setShow2(false);
  const showCanvas = () => setShow2(true);

  return (
    <div className="inboxItem d-flex justify-content-between align-items-center">
      <div className="productStatusAndName d-flex align-items-center">
        <Offcanvas
          show={show2}
          onHide={closeCanvas}
          placement={"end"}
          className="w-50"
        >
          <Offcanvas.Body>
            <div className="ProductStatisticsContainer d-flex flex-column">
              <div className="ProductStatisticsIcon">
                <Image src={dangerIcon} />
              </div>
              <div>
                <h3 className="ProductStatisticsHeading">Delete product</h3>
              </div>
              <div className="my-3">
                <p className="m-0">
                  Are you sure you want to delete product blackhead remover
                  pimple remover tool Skin Tag Nose Cleansing Instrument Vacuum
                  Skin Care Tools black head remover patch from Oberlo?
                </p>
              </div>
              <div className=" d-flex align-items-center my-3">
                <input
                  className="form-check-input "
                  type="checkbox"
                  id="checkBeforDelete"
                />
                <label for="checkBeforDelete " className="mx-2">
                  Delete this product from my Shopify store too.
                </label>
              </div>
            </div>
            <div className="d-flex justify-content-end cancelAndDelete">
              <div className="deleteAndEdit d-flex align-items-center">
                <div className="btnWithIcon  mx-2">
                  <button className="btn" onClick={closeCanvas}>
                    Cancel
                  </button>
                </div>
                <button className="btn delete">Delete</button>
              </div>
            </div>
          </Offcanvas.Body>
        </Offcanvas>

        <Offcanvas
          show={show}
          onHide={handleClose}
          placement={"end"}
          className="w-75"
        >
          <div>
            <Offcanvas.Body>
              <div className="ProductStatisticsContainer d-flex flex-column">
                <div className="ProductStatisticsIcon">
                  <Image src={featuredIcon} />
                </div>
                <div>
                  <h3 className="ProductStatisticsHeading">
                    Change product price
                  </h3>
                </div>

                <div className="my-3">
                  <p>
                    Product cost has changed:
                    <Link href="#">Joint Support Knee Pads</Link>
                  </p>
                </div>
                <div className="updateBox d-flex align-items-center">
                  <div>
                    <Image src={badge} />
                  </div>
                  <div>
                    <p className="updateBoxContent">
                      You have set update price and compare at price for when
                      the product cost changes. We’ve already changed the price
                      & compare at price for this product, calculated using your
                      pricing rules. & compare at price for this product,
                      calculated using your pricing rules.
                    </p>
                  </div>
                </div>
                <div className="moreActionsBtn d-flex justify-content-end">
                  <div>
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option value="1" selected>
                        More Actions
                      </option>
                      <option value="2">delete</option>
                      <option value="3">add</option>
                    </select>
                  </div>
                </div>
                <div className="tableBox">
                  <table class=" billingHistoryTable">
                    <thead>
                      <tr>
                        <th scope="col">SKU</th>
                        <th scope="col">Old price</th>
                        <th scope="col">New price</th>
                        <th scope="col">Change</th>
                        <th scope="col">Shipping</th>
                        <th scope="col">Price</th>
                        <th scope="col">Compare at price change</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="w-100 bg-white">
                        <td>6512654-china-1-pair</td>
                        <td>US$7.23</td>
                        <td>US$18.46</td>
                        <td className=" text-danger">
                          <Image src={arrowDown} /> US$1.23 (5%)
                        </td>
                        <td>USD$0.00</td>
                        <td className="">
                          <div className="tdInput1">
                            <Input
                              type={"text"}
                              value={"$15.26"}
                              classes={"form-control"}
                            />
                          </div>
                        </td>
                        <td className="">
                          <div className="tdInput2">
                            <Input
                              type={"text"}
                              value={"$15.26"}
                              classes={"form-control "}
                            />
                          </div>
                        </td>
                      </tr>
                      <tr className="w-100 bg-white">
                        <td>6512654-china-1-pair</td>
                        <td>US$7.23</td>
                        <td>US$18.46</td>
                        <td className=" text-danger">
                          <Image src={arrowDown} /> US$1.23 (5%)
                        </td>
                        <td>USD$0.00</td>
                        <td className="">
                          <div className="tdInput1">
                            <Input
                              type={"text"}
                              value={"$15.26"}
                              classes={"form-control"}
                            />
                          </div>
                        </td>
                        <td className="">
                          <div className="tdInput2">
                            <Input
                              type={"text"}
                              value={"$15.26"}
                              classes={"form-control "}
                            />
                          </div>
                        </td>
                      </tr>
                      <tr className="w-100 bg-white">
                        <td>6512654-china-1-pair</td>
                        <td>US$7.23</td>
                        <td>US$18.46</td>
                        <td className=" text-danger">
                          <Image src={arrowDown} /> US$1.23 (5%)
                        </td>
                        <td>USD$0.00</td>
                        <td className="">
                          <div className="tdInput1">
                            <Input
                              type={"text"}
                              value={"$15.26"}
                              classes={"form-control"}
                            />
                          </div>
                        </td>
                        <td className="">
                          <div className="tdInput2">
                            <Input
                              type={"text"}
                              value={"$15.26"}
                              classes={"form-control "}
                            />
                          </div>
                        </td>
                      </tr>
                      <tr className="w-100 bg-white">
                        <td>6512654-china-1-pair</td>
                        <td>US$7.23</td>
                        <td>US$18.46</td>
                        <td className=" text-danger">
                          <Image src={arrowDown} /> US$1.23 (5%)
                        </td>
                        <td>USD$0.00</td>
                        <td className="">
                          <div className="tdInput1">
                            <Input
                              type={"text"}
                              value={"$15.26"}
                              classes={"form-control"}
                            />
                          </div>
                        </td>
                        <td className="">
                          <div className="tdInput2">
                            <Input
                              type={"text"}
                              value={"$15.26"}
                              classes={"form-control "}
                            />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="perviosAndNextBox d-flex align-items-center justify-content-between ">
                    <div className="btnWithIcon mx-1">
                      <button className="btn">
                        <Image src={arrowLeft} />
                        Previous
                      </button>
                    </div>
                    <div className="d-flex align-items-center ">
                      <div className="pageNumber d-flex align-items-center justify-content-center mx-3">
                        <NavLink className="w-100 " to="/">
                          <span className="w-100">1</span>
                        </NavLink>
                      </div>
                      <div className="pageNumber d-flex align-items-center justify-content-center mx-3">
                        <NavLink className="w-100 " href="#">
                          <span className="w-100">2</span>
                        </NavLink>
                      </div>
                      <div className="pageNumber d-flex align-items-center justify-content-center mx-3">
                        <NavLink className="w-100 " href="#">
                          <span className="w-100">3</span>
                        </NavLink>
                      </div>
                      ...
                      <div className="pageNumber d-flex align-items-center justify-content-center mx-3">
                        <NavLink className="w-100 " href="#">
                          <span className="w-100">4</span>
                        </NavLink>
                      </div>
                      <div className="pageNumber d-flex align-items-center justify-content-center mx-3">
                        <NavLink className="w-100 " href="#">
                          <span className="w-100">5</span>
                        </NavLink>
                      </div>
                      <div className="pageNumber d-flex align-items-center justify-content-center mx-3">
                        <NavLink className="w-100 " href="#">
                          <span className="w-100">6</span>
                        </NavLink>
                      </div>
                    </div>
                    <div className="btnWithIcon mx-1">
                      <button className="btn align-items-center ">
                        Next
                        <Image src={arrowRight} className="rev" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Offcanvas.Body>
          </div>
        </Offcanvas>
        <div className={statusClases}>
          <Image src={statusImage} />
        </div>
        <div className="productData">
          <p>{data}</p>
        </div>
      </div>
      <div className="viewPriceAndDelete d-flex align-items-center">
        <Link href="#" className="" onClick={handleShow}>
          View Prices
        </Link>
        <Link href="#" className="" onClick={showCanvas}>
          <Image src={close} />
        </Link>
      </div>
    </div>
  );
}

export default InboxItem;
