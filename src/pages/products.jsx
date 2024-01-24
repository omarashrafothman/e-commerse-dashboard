import TitleHeader from "@/components/titleHeader/TitleHeader";
import React from "react";
import Image from "next/image";
import arrowLeft from "../assets/icons/arrow-left black.png";
import arrowRight from "../assets/icons/arrow-right black.png";
import { NavLink, OffcanvasTitle } from "react-bootstrap";
import Input from "@/components/inputs/Input";
import info from "../assets/icons/info.png";
import ProductImage from "../assets/images/product.png";
import bag from "../assets/icons/icons8-aliexpress 1.png";
import Link from "next/link";
import { useState, useEffect } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import infoCost from "../assets/icons/info (1).png";

// edge  start
export const runtime = "experimental-edge"; // 'nodejs' is the default
export const dynamic = "force-dynamic"; // static by default, unless reading the request

export function GET(request) {
  return new Response(`Hello from ${process.env.VERCEL_REGION}`);
}
// edge  end

export default function products() {
  useEffect(() => {
    document.title = "products";
  }, []);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show3, setshow3] = useState(false);
  const closeCnvas3 = () => setshow3(false);
  const showCnvas3 = () => setshow3(true);

  return (
    <div className="main">
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement={"end"}
        className="w-50"
      >
        <div>
          <Offcanvas.Header></Offcanvas.Header>
          <Offcanvas.Body>
            <h4>Chopper Vegetable Salad Cutter</h4>
            <p className="m-0 offcanvasp">
              Chopper Vegetable Salad Cutter Cutting Bowl Vegetable Slices Cut
              Fruit for Kitchen Tools Accessories Gadgets Kitchen Items (Genkent
              Official Store (AliExpress))
            </p>
            <div className="d-flex editStore">
              <Link href="#">Edit on Store</Link>
              <Link href="#">Edit on Oprn Original</Link>
            </div>
            <div className="costChanged d-flex align-items-center">
              <Image src={infoCost} />
              <div className="d-flex  flex-column">
                <h5>Cost changed</h5>
                <p className="">
                  The supplier has changed the product cost. You may want to
                  review your store price. UPDATE PRICE
                </p>
              </div>
            </div>
            <div className="d-flex align-items-center imagesOfProducts">
              <Image src={ProductImage} />
              <Image src={ProductImage} />
              <Image src={ProductImage} />
              <Image src={ProductImage} />
            </div>
            <div className="d-flex align-items-center">
              <div className="d-flex flex-column storePrice">
                <h4>Store price US$53.97 - US$92.97</h4>
                <p>
                  Store price - product selling price paid by your customers.
                </p>
              </div>
              <div className="d-flex flex-column storePrice">
                <h4>Store price US$53.97 - US$92.97</h4>
                <p>
                  Store price - product selling price paid by your customers.
                </p>
              </div>
            </div>
            <div className="supplierBox storePrice">
              <div className="d-flex">
                <p>Supplier:</p> <h4>Genkent Official Store (AliExpress)</h4>
              </div>
              <Link href="#">View Supplier Store</Link>
            </div>
            <div className="sourceProducts d-flex align-items-center justify-content-between">
              <h4>Source Products</h4>
              <button onClick={showCnvas3}>Manage variants</button>
            </div>
            <div className="officialStore d-flex flex-column">
              <Link href="#">
                Free shipping Black Cufflinks for men fashion knot design top
                quality copper hotsale cufflinks whoelse&retail
              </Link>
              <div className="d-flex align-items-center justify-content-between">
                <h5>by igame Official Store</h5>
                <Link href="#" className="viewStore">
                  View store
                </Link>
              </div>
              <p>18 of 29 variants linked . 189041 in stock</p>
            </div>
            <div className="variant d-flex flex-column">
              <p>6 variants</p>
              <p>44462 available in stock</p>
            </div>
            <div className="utomaticUpdate d-flex align-items-center ">
              <div class="form-check form-switch d-flex align-items-center">
                <input class="form-check-input " type="checkbox" id="update" />
                <label htmlFor="update">
                  Automatically update price when cost changes Manage auto
                  update settings
                </label>
              </div>
            </div>
            <div className="d-flex justify-content-end btnsforUpdate">
              <div className="d-flex align-items-center">
                <div className="deleteAndEdit">
                  <button className="btn " onClick={handleClose}>
                    Cancel
                  </button>

                  <button className="btn edit ">Override</button>
                  <button className="btn delete  ">Delete</button>
                </div>
              </div>
            </div>
          </Offcanvas.Body>
        </div>
      </Offcanvas>
      <Offcanvas
        show={show3}
        onHide={closeCnvas3}
        placement={"end"}
        className="w-50"
      >
        <div>
          <Offcanvas.Header>
            <OffcanvasTitle>Manage Variants</OffcanvasTitle>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className="sourceProducts d-flex align-items-center justify-content-between">
              <h4>Source Products</h4>
              <button onClick={showCnvas3}>Manage variants</button>
            </div>
            <div className="freeShippingOffCanvas d-flex flex-column">
              <div className="freeShippingOffCanvasItem d-flex">
                <div className="freeShippingOffCanvasItemImage">
                  <Image src={ProductImage} />
                </div>
                <p>
                  Free shipping Black Cufflinks for men fashion knot design top
                  quality copper hotsale cufflinks whoelse&retail by igame
                  official store
                </p>
              </div>
              <p className="twop">18 of 29 variants linked</p>
            </div>
            <div className="sourceProducts d-flex align-items-center justify-content-end my-2 ">
              <button onClick={showCnvas3}>Manage variants</button>
            </div>
            <div className="tableBox">
              <table class=" billingHistoryTable">
                <thead>
                  <tr>
                    <th scope="col">Variants in store</th>
                    <th scope="col">Source product</th>
                    <th scope="col">Source variant</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="w-100">
                    <td>
                      <div className="productDesc d-flex align-items-center ">
                        <Image src={ProductImage} className="productImage" />
                        <div className="productDescText d-flex flex-column">
                          <Link href="#" onClick={handleShow}>
                            <span>
                              <p className="bigp">Knot18</p>
                            </span>
                            <span className="d-flex">
                              <p className="smallp">in 0 orders</p>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </td>
                    <td>
                      <Input
                        classes={"form-control"}
                        id={"sourceProduct"}
                        value={"Free shipping Black Cuffli..."}
                        type={"text"}
                      />
                    </td>
                    <td>
                      <Input
                        classes={"form-control"}
                        id={"sourceVariant"}
                        value={"Knot18"}
                        type={"text"}
                      />
                    </td>
                    <td>
                      <button className="btn deleteVariant">Delete</button>
                    </td>
                  </tr>
                  <tr className="w-100">
                    <td>
                      <div className="productDesc d-flex align-items-center ">
                        <Image src={ProductImage} className="productImage" />
                        <div className="productDescText d-flex flex-column">
                          <Link href="#" onClick={handleShow}>
                            <span>
                              <p className="bigp">Knot18</p>
                            </span>
                            <span className="d-flex">
                              <p className="smallp">in 0 orders</p>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </td>
                    <td>
                      <Input
                        classes={"form-control"}
                        id={"sourceProduct"}
                        value={"Free shipping Black Cuffli..."}
                        type={"text"}
                      />
                    </td>
                    <td>
                      <Input
                        classes={"form-control"}
                        id={"sourceVariant"}
                        value={"Knot18"}
                        type={"text"}
                      />
                    </td>
                    <td>
                      <button className="btn deleteVariant">Delete</button>
                    </td>
                  </tr>
                  <tr className="w-100">
                    <td>
                      <div className="productDesc d-flex align-items-center ">
                        <Image src={ProductImage} className="productImage" />
                        <div className="productDescText d-flex flex-column">
                          <Link href="#" onClick={handleShow}>
                            <span>
                              <p className="bigp">Knot18</p>
                            </span>
                            <span className="d-flex">
                              <p className="smallp">in 0 orders</p>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </td>
                    <td>
                      <Input
                        classes={"form-control"}
                        id={"sourceProduct"}
                        value={"Free shipping Black Cuffli..."}
                        type={"text"}
                      />
                    </td>
                    <td>
                      <Input
                        classes={"form-control"}
                        id={"sourceVariant"}
                        value={"Knot18"}
                        type={"text"}
                      />
                    </td>
                    <td>
                      <button className="btn deleteVariant">Delete</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="d-flex justify-content-end btnsforUpdate">
              <div className="d-flex align-items-center">
                <div className="deleteAndEdit">
                  <button className="btn " onClick={closeCnvas3}>
                    Cancel
                  </button>

                  <button className="btn edit ">Override</button>
                  <button className="btn delete  ">Delete</button>
                </div>
              </div>
            </div>
          </Offcanvas.Body>
        </div>
      </Offcanvas>

      <div className="container3">
        <TitleHeader title={"Products"} />
        <div className="container1">
          <div className="orderSearchBox d-flex  align-items-center ">
            <Input
              holder={"Enter key words"}
              type={"text"}
              classes={"form-control"}
            />
          </div>
          <div className="tableBox">
            <table class=" billingHistoryTable">
              <thead>
                <tr>
                  <th scope="col">Description</th>
                  <th scope="col">Orders</th>
                  <th scope="col">Inventory</th>
                  <th scope="col">Shop price</th>
                  <th scope="col">Product cost</th>
                  <th scope="col">Profit</th>
                </tr>
              </thead>
              <tbody>
                <tr className="w-100">
                  <td>
                    <div className="productDesc d-flex align-items-center ">
                      <Image src={ProductImage} className="productImage" />
                      <div className="productDescText d-flex flex-column">
                        <Link href="#" onClick={handleShow}>
                          <span>
                            <p className="bigp">
                              Chopper Vegetable Salad Cutter
                            </p>
                          </span>
                          <span className="d-flex">
                            <Image src={bag} />
                            <p className="smallp">Genkent Official store</p>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className="m-0">8641</p>
                  </td>
                  <td>
                    <p className="m-0">1962</p>
                  </td>
                  <td>
                    <p className="m-0">US$19.97 - US$23.97</p>
                  </td>
                  <td>
                    <p className="m-0 cost">US$9.97 - US$13.97</p>
                  </td>
                  <td>
                    <p className="m-0 profit">US$10.00 - US$10.00</p>
                  </td>
                </tr>
                <tr className="w-100">
                  <td>
                    <div className="productDesc d-flex align-items-center ">
                      <Image src={ProductImage} className="productImage" />
                      <div className="productDescText d-flex flex-column">
                        <Link href="#" onClick={handleShow}>
                          <span>
                            <p className="bigp">
                              Chopper Vegetable Salad Cutter
                            </p>
                          </span>
                          <span className="d-flex">
                            <Image src={bag} />
                            <p className="smallp">Genkent Official store</p>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className="m-0">8641</p>
                  </td>
                  <td>
                    <p className="m-0">1962</p>
                  </td>
                  <td>
                    <p className="m-0">US$19.97 - US$23.97</p>
                  </td>
                  <td>
                    <p className="m-0 cost">US$9.97 - US$13.97</p>
                  </td>
                  <td>
                    <p className="m-0 profit">US$10.00 - US$10.00</p>
                  </td>
                </tr>
                <tr className="w-100">
                  <td>
                    <div className="productDesc d-flex align-items-center ">
                      <Image src={ProductImage} className="productImage" />
                      <div className="productDescText d-flex flex-column">
                        <Link href="#" onClick={handleShow}>
                          <span>
                            <p className="bigp">
                              Chopper Vegetable Salad Cutter
                            </p>
                          </span>
                          <span className="d-flex">
                            <Image src={bag} />
                            <p className="smallp">Genkent Official store</p>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className="m-0">8641</p>
                  </td>
                  <td>
                    <p className="m-0">1962</p>
                  </td>
                  <td>
                    <p className="m-0">US$19.97 - US$23.97</p>
                  </td>
                  <td>
                    <p className="m-0 cost">US$9.97 - US$13.97</p>
                  </td>
                  <td>
                    <p className="m-0 profit">US$10.00 - US$10.00</p>
                  </td>
                </tr>
                <tr className="w-100">
                  <td>
                    <div className="productDesc d-flex align-items-center ">
                      <Image src={ProductImage} className="productImage" />
                      <div className="productDescText d-flex flex-column">
                        <Link href="#" onClick={handleShow}>
                          <span>
                            <p className="bigp">
                              Chopper Vegetable Salad Cutter
                            </p>
                          </span>
                          <span className="d-flex">
                            <Image src={bag} />
                            <p className="smallp">Genkent Official store</p>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className="m-0">8641</p>
                  </td>
                  <td>
                    <p className="m-0">1962</p>
                  </td>
                  <td>
                    <p className="m-0">US$19.97 - US$23.97</p>
                  </td>
                  <td>
                    <p className="m-0 cost">US$9.97 - US$13.97</p>
                  </td>
                  <td>
                    <p className="m-0 profit">US$10.00 - US$10.00</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="perviosAndNextBox d-flex align-items-center justify-content-between ">
              <div className="btnWithIcon mx-1">
                <button className="btn ">
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
          <div className="unmappedBox d-flex align-items-center">
            <Image src={info} />
            <p className="m-0">
              Unmapped product. Click Map Product to link a supplier’s product
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
