import TitleHeader from "@/components/titleHeader/TitleHeader";
import Input from "@/components/inputs/Input";
import Product from "@/components/product/Product";
import NavigationFooter from "@/components/navFooter/NavigationFooter";
import products from "../../local-json/products.json";
import { useEffect, useState } from "react";
import OffcanvasComponent from "../../components/offcanvas/RightOffcanvas";
import Image from "next/image";
import shippingMethod from "../../assets/images/webp/Featured icon (1).png";

// edge  start

export const runtime = "experimental-edge"; // 'nodejs' is the default
export const dynamic = "force-dynamic"; // static by default, unless reading the request

export function GET(request) {
  return new Response(`Hello from ${process.env.VERCEL_REGION}`);
}

// edge  end
function index() {
  const [show6, setShowSix] = useState(true);
  const handleClose6 = () => setShowSix(false);
  const handleShow6 = () => setShowSix(true);

  const [splitOptionChecked, setSplitOptionChecked] = useState(true);
  const openSplit = () => {
    setSplitOptionChecked(!splitOptionChecked);
  };
  const [splitManuallyChecked, setSplitManuallyChecked] = useState(false);
  const openSplitManually = () => {
    setSplitManuallyChecked(!splitManuallyChecked);
  };

  useEffect(() => {
    document.title = "Imports";
  }, []);
  return (
    <div>
      <div className="main">
        <div className="container3">
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
                  <h4>Split product</h4>
                </div>

                <div className="generalContent">
                  <div className="d-flex flex-column boxWithRadio">
                    <div className="d-flex  radioBox">
                      <input
                        className="form-check-input"
                        type="radio"
                        onClick={openSplit}
                        checked={splitOptionChecked}
                      />
                      <div className="d-flex flex-column">
                        <label>Split by option</label>
                        <p>
                          Select variants you wish to split to another product.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mx-5">
                  <div className="generalContent">
                    <div className="d-flex flex-column boxWithRadio">
                      <div className="d-flex  radioBox">
                        <input
                          className="form-check-input borderColor"
                          type="radio"
                          disabled={!splitOptionChecked}
                        />
                        <div
                          className={
                            splitOptionChecked
                              ? "d-flex flex-column"
                              : "d-flex flex-column disable"
                          }
                        >
                          <label>Ships from</label>
                          <p>
                            We will create 3 products each containing only
                            distinct
                            <br /> “ships” From” variants (China, USA and
                            Russian Federation).
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="generalContent">
                    <div className="d-flex flex-column boxWithRadio">
                      <div className="d-flex  radioBox">
                        <input
                          className="form-check-input"
                          type="radio"
                          disabled={!splitOptionChecked}
                        />
                        <div
                          className={
                            splitOptionChecked
                              ? "d-flex flex-column"
                              : "d-flex flex-column disable"
                          }
                        >
                          <label>Color</label>
                          <p>
                            We will create 2 products each containing only
                            distinct “Color variants (1Pair, 1 PC).
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="generalContent">
                  <div className="d-flex flex-column boxWithRadio">
                    <div className="d-flex  radioBox">
                      <input
                        className="form-check-input"
                        type="radio"
                        checked={splitManuallyChecked}
                        onClick={openSplitManually}
                      />
                      <div className="d-flex flex-column">
                        <label>Split manually</label>
                        <p>
                          Select which option you want to use for splitting the
                          product.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div
                    className={
                      splitManuallyChecked ? "shipsFrom " : "shipsFrom disable"
                    }
                  >
                    <h4>Ships from</h4>
                    <div className="d-flex align-items-center flex-wrap w-75">
                      <label class="control control-checkbox  from">
                        <input type="checkbox" />
                        <p
                          className="m-0 fromC"
                          style={{ color: "rgba(52, 64, 84, 1) " }}
                        >
                          china
                        </p>
                        <div class="control_indicator"></div>
                      </label>
                      <label class="control control-checkbox from ">
                        <input type="checkbox" />
                        <p className="m-0 fromC"> USA</p>
                        <div class="control_indicator"></div>
                      </label>
                      <label class="control control-checkbox  from">
                        <input type="checkbox" />
                        <p className="m-0 fromC"> Russian</p>
                        <div class="control_indicator"></div>
                      </label>
                      <label class="control control-checkbox  from">
                        <input type="checkbox" />
                        <p className="m-0 fromC"> Argentina</p>
                        <div class="control_indicator"></div>
                      </label>
                      <label class="control control-checkbox  from">
                        <input type="checkbox" />
                        <p className="m-0 fromC"> Australia</p>
                        <div class="control_indicator"></div>
                      </label>
                      <label class="control control-checkbox  from">
                        <input type="checkbox" />
                        <p className="m-0 fromC"> France</p>
                        <div class="control_indicator"></div>
                      </label>
                      <label class="control control-checkbox  from">
                        <input type="checkbox" />
                        <p className="m-0 fromC"> Germany</p>
                        <div class="control_indicator"></div>
                      </label>
                      <label class="control control-checkbox  from">
                        <input type="checkbox" />
                        <p className="m-0 fromC"> Canada</p>
                        <div class="control_indicator"></div>
                      </label>
                    </div>
                  </div>
                  <div
                    className={
                      splitManuallyChecked ? "shipsFrom " : "shipsFrom disable"
                    }
                  >
                    <h4>Color</h4>
                    <div className="d-flex align-items-center flex-wrap w-75">
                      <label class="control control-checkbox  from">
                        <input type="checkbox" />
                        <p className="m-0 fromC">Gray</p>
                        <div class="control_indicator"></div>
                      </label>
                      <label class="control control-checkbox from ">
                        <input type="checkbox" />
                        <p className="m-0 fromC"> Pink</p>
                        <div class="control_indicator"></div>
                      </label>
                      <label class="control control-checkbox  from">
                        <input type="checkbox" />
                        <p className="m-0 fromC"> White</p>
                        <div class="control_indicator"></div>
                      </label>
                      <label class="control control-checkbox  from">
                        <input type="checkbox" />
                        <p className="m-0 fromC"> Black</p>
                        <div class="control_indicator"></div>
                      </label>
                      <label class="control control-checkbox  from">
                        <input type="checkbox" />
                        <p className="m-0 fromC"> Yellow</p>
                        <div class="control_indicator"></div>
                      </label>
                      <label class="control control-checkbox  from">
                        <input type="checkbox" />
                        <p className="m-0 fromC"> Green</p>
                        <div class="control_indicator"></div>
                      </label>
                      <label class="control control-checkbox  from">
                        <input type="checkbox" d />
                        <p className="m-0 fromC"> Blue</p>
                        <div class="control_indicator"></div>
                      </label>
                      <label class="control control-checkbox  from">
                        <input type="checkbox" disabled />
                        <p className="m-0 fromC"> Orange</p>
                        <div class="control_indicator"></div>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="shippingBtns  d-flex align-items-center split">
                  <div className="btnWithIcon  mx-2">
                    <button className="btn" onClick={handleClose6}>
                      Cancel
                    </button>
                  </div>
                  <div className="importsBtns">
                    <button className="editBtn btn" onClick={handleShow6}>
                      Split
                    </button>
                  </div>
                </div>
              </div>
            }
            w={"bigModal"}
            showState={show6}
          />
          <TitleHeader title={"Imports"} />
          <div className="container1">
            <div className="mainContent">
              <div className="orderSearchBox d-flex  align-items-center ">
                <div className="searchBox mt-4 ">
                  <span className="searchSvgIcon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="16"
                      viewBox="0 0 15 16"
                      fill="none"
                    >
                      <path
                        d="M6.11144 11.0549C8.56604 11.0549 10.5559 9.06506 10.5559 6.61046C10.5559 4.15586 8.56604 2.16602 6.11144 2.16602C3.65684 2.16602 1.66699 4.15586 1.66699 6.61046C1.66699 9.06506 3.65684 11.0549 6.11144 11.0549Z"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M13.3332 13.8342L9.44434 9.94531"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  <div class="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search for products"
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
              <div className="productsContainer w-100 d-flex align-items-center justify-content-between my-4 flex-wrap">
                {products &&
                  products.map((product) => (
                    <Product
                      name={product.name}
                      price={product.price}
                      sale={product.sale}
                      rate={product.rate}
                      reviews={product.reviews}
                      offerPercent={product.offerPercent}
                      imgSrc={product.mainImagSrc}
                      id={product.id}
                    />
                  ))}
              </div>
              <NavigationFooter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
