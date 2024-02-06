import Layout from "./layout";
import ProductImage from "../../../../assets/images/product.png";
import Image from "next/image";
import Link from "next/link";
import Input from "@/components/inputs/Input";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import images from "./images";
import productImage from "../../../../assets/images/product.png";
// edge  start
export const runtime = "experimental-edge"; // 'nodejs' is the default
export const dynamic = "force-dynamic"; // static by default, unless reading the request

export function GET(request) {
  return new Response(`Hello from ${process.env.VERCEL_REGION}`);
}
// edge  end

function variant() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Layout>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement={"end"}
        className="w-50"
      >
        <div>
          <Offcanvas.Header>
            <div className="paymenFeature">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M1 10H23M3 4H21C22.1046 4 23 4.89543 23 6V18C23 19.1046 22.1046 20 21 20H3C1.89543 20 1 19.1046 1 18V6C1 4.89543 1.89543 4 3 4Z"
                  stroke="#53D2B7"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className="shippingMethods">
              <h4>Available shipping methods</h4>
              <p>
                The selected shipping method is displayed in the price table.
                This is provided be the supplier and based on your country
                selection and a standard delivery method (eg ePacket).
              </p>
            </div>
            <div className="d-flex align-items-center justify-content-between my-4">
              <div className="selectBox ">
                <select class="form-select" aria-label="Default select example">
                  <option value="1" selected>
                    China
                  </option>
                  <option value="2">11 Hours</option>
                  <option value="3">10 Hours</option>
                </select>
              </div>
              <div className="selectBox ">
                <select class="form-select" aria-label="Default select example">
                  <option value="1" selected>
                    Low to high
                  </option>
                  <option value="2">11 Hours</option>
                  <option value="3">10 Hours</option>
                </select>
              </div>
            </div>
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
                  <p className="m-0">37-37 days</p>
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
                  <p className="m-0">37-37 days</p>
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
                  <p className="m-0">37-37 days</p>
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
                  <p className="m-0">37-37 days</p>
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
                  Confirm
                </button>
              </div>
            </div>
          </Offcanvas.Body>
        </div>
      </Offcanvas>
      <div className="autoUpdate">
        <div className="generalOrderItem d-flex">
          <div class="form-check form-switch">
            <input
              class="form-check-input "
              type="checkbox"
              id="flexSwitchCheckChecked"
              checked
            />
          </div>
          <div className="generalOrderItemData d-flex flex-column">
            <h4>
              Automatically update price when cost changes Manage Auto Update
              Settings
            </h4>
          </div>
        </div>
      </div>
      <div className="selecAllOrNone d-flex align-items-center">
        <div className="d-flex allNoneBox">
          <input type="radio" id="all" />
          <label htmlFor="all">All</label>
        </div>
        <div className="d-flex allNoneBox">
          <input type="radio" id="none" />
          <label htmlFor="none">None</label>
        </div>
        <div className="selectBox mx-2">
          <select class="form-select" aria-label="Default select example">
            <option value="1" selected>
              Ships from
            </option>
            <option value="2">11 Hours</option>
            <option value="3">10 Hours</option>
          </select>
        </div>
        <div className="selectBox mx-2">
          <select class="form-select" aria-label="Default select example">
            <option value="1" selected>
              Color
            </option>
            <option value="2">11 Hours</option>
            <option value="3">10 Hours</option>
          </select>
        </div>
      </div>
      <div className="tableBox">
        <table class=" billingHistoryTable">
          <thead className="variantTableHead">
            <tr>
              <th scope="col" className="dataWithImage">
                <div className="d-flex align-items-center">
                  <label class="control control-checkbox m-0 ">
                    <input type="checkbox" />
                    <div class="control_indicator"></div>
                  </label>
                </div>
              </th>
              <th scope="col">SKU</th>
              <th scope="col">Ships From</th>
              <th scope="col">Color</th>
              <th scope="col">Cost</th>
              <th scope="col">Shipping</th>
              <th scope="col">Price</th>
              <th scope="col">Profit</th>
              <th scope="col">Compare at Price</th>
              <th scope="col">Inventory</th>
            </tr>
          </thead>
          <tbody>
            <tr className="w-100">
              <td className="dataWithImage">
                <div className="d-flex align-items-center">
                  <label class="control control-checkbox m-0 ">
                    <input type="checkbox" />
                    <div class="control_indicator"></div>
                  </label>
                  <label>
                    <Image src={ProductImage} htmlFor="productCheck" />
                  </label>
                </div>
              </td>
              <td>
                <Input type={"number"} classes={"form-control"} value="2663" />
              </td>
              <td>
                <Input type={"text"} classes={"form-control"} value="China" />
              </td>
              <td>
                <Input type={"text"} classes={"form-control"} value="red" />
              </td>
              <td>
                <p>$20.21</p>
              </td>
              <td>
                <p>USD$0.00</p>
              </td>
              <td>
                <Input type={"text"} classes={"form-control"} value="$15.26" />
              </td>
              <td className="profit">
                <p>$20.21</p>
              </td>
              <td>
                <Input type={"text"} classes={"form-control"} value="$20.21" />
              </td>
              <td>
                <p>10952</p>
              </td>
            </tr>
            <tr className="w-100">
              <td className="dataWithImage">
                <div className="d-flex align-items-center">
                  <label class="control control-checkbox m-0 ">
                    <input type="checkbox" />
                    <div class="control_indicator"></div>
                  </label>
                  <label>
                    <Image src={ProductImage} htmlFor="productCheck" />
                  </label>
                </div>
              </td>
              <td>
                <Input type={"number"} classes={"form-control"} value="2663" />
              </td>
              <td>
                <Input type={"text"} classes={"form-control"} value="China" />
              </td>
              <td>
                <Input type={"text"} classes={"form-control"} value="red" />
              </td>
              <td>
                <p>$20.21</p>
              </td>
              <td>
                <p>USD$0.00</p>
              </td>
              <td>
                <Input type={"text"} classes={"form-control"} value="$15.26" />
              </td>
              <td className="profit">
                <p>$20.21</p>
              </td>
              <td>
                <Input type={"text"} classes={"form-control"} value="$20.21" />
              </td>
              <td>
                <p>10952</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

export default variant;
