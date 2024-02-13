import React from "react";
import Image from "next/image";
import product from "../../assets/images/webp/product.webp";
import StarRating from "../starRating/StarRating";
import barChart from "../../assets/icons/bar-chart-2.png";
import cart from "../../assets/icons/icons8-aliexpress 1.png";
import bag from "../../assets/icons/Vector.png";
import close from "../../assets/icons/x.png";
import Link from "next/link";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import productImage from "../../assets/icons/Featured icon.png";
import arrowLeft from "../../assets/icons/arrow-left black.png";
import TitleHeader from "../titleHeader/TitleHeader";

export default function ProductDetails({ paramsId, segment }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  var link = "/imports/" + segment + "/editproduct";
  return (
    <div>
      <div className="main">
        <div className="container3">
          <TitleHeader title={"Imports"} />
          <div className="container1 py-0" style={{ marginLeft: "2rem" }}>
            <Link href="/imports" className="backLink mt-3">
              <Image src={arrowLeft} />
            </Link>
            <div className="mainContent ">
              <Offcanvas
                show={show}
                onHide={handleClose}
                placement={"end"}
                className="w-50"
              >
                <div>
                  <Offcanvas.Header>
                    <div className="ProductStatisticsIcon">
                      <Image src={productImage} />
                    </div>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <div className="ProductStatisticsContainer d-flex flex-column">
                      <div>
                        <h3 className="ProductStatisticsHeading">
                          Product statistics
                        </h3>
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="ProductStatisticsReview d-flex ">
                          <StarRating rating={5} Dimension={16} spacing={2} />
                          <p className="my-2 mx-2">5.0</p>
                        </div>
                        <div className="ProductStatisticsImports d-flex">
                          <p>Imports</p>
                          <p className="mx-1">529</p>
                        </div>
                        <div className="ProductStatisticsOrders d-flex">
                          <p>Orders</p>
                          <p className="mx-1">529</p>
                        </div>
                      </div>
                      <div className="my-3">
                        <p>Read 256 reviews on AliExpress</p>
                      </div>
                    </div>
                  </Offcanvas.Body>
                </div>
              </Offcanvas>

              <div className="productDetailsContainer d-flex">
                <div className="productDetailsMedia">
                  <div className="bigMediaBox">
                    <Image src={product} />
                  </div>
                  <div className="d-flex align-items-center justify-content-evenly flex-wrap  my-4 productDetailsMediaGallery">
                    <span className="smallMediaBox">
                      <Image src={product} />
                    </span>
                    <span className="smallMediaBox">
                      <Image src={product} />
                    </span>
                    <span className="smallMediaBox">
                      <Image src={product} />
                    </span>
                    <span className="smallMediaBox">
                      <Image src={product} />
                    </span>
                    <span className="smallMediaBox">
                      <span className="blure">
                        <p>+4</p>
                      </span>
                      <Image src={product} />
                    </span>
                  </div>
                </div>
                <div className="productDetailsContent">
                  <div className="productDetailsText">
                    <div className="productPriceAndSale d-flex align-items-center">
                      <h3 className="productPrice">
                        US <strong>$20</strong>.25
                      </h3>
                      <p className="salePrice">
                        <s>US $30.13</s>
                      </p>
                      <p className="salePer">-%12</p>
                    </div>
                    <div className="productDetail">
                      <h4>
                        Chopper Vegetable Salad Cutter Cutting Bowl Vegetable
                        Slices Cut Fruit for Kitchen Tools Accessories Gadgets
                        Kitchen Items
                      </h4>
                    </div>
                    <div className="productReview d-flex align-items-center ">
                      <div className="productRate">
                        <StarRating rating={5} Dimension={14} spacing={2} />
                      </div>
                      <div className="rateValue">
                        <p>5.0</p>
                      </div>
                      <div className="reviewValue">
                        <p>13 review</p>
                      </div>
                    </div>
                    <div className="stockBox">
                      <div className="stockStatus">
                        <p>out of stock</p>
                      </div>
                      <div className="statisticOfProduct d-flex align-items-center">
                        <div className="productStattistics">
                          <Image src={barChart} />
                          <Link href="#" onClick={handleShow}>
                            View product statistics
                          </Link>
                        </div>
                        <hr />
                        <div className="productStattistics">
                          <Image src={cart} />
                          <Link href="#">View product statistics</Link>
                        </div>
                      </div>
                      <div className="importedBox d-flex align-items-center">
                        <Image src={bag} />
                        <p>Imported to store</p>
                      </div>
                      <div className="importsBtns d-flex">
                        <Link href={link}>
                          <button className="editBtn btn">
                            Edit on import list
                          </button>
                        </Link>
                        <button className="removeBtn btn">
                          <Image src={close} />
                          Remove import list
                        </button>
                      </div>
                      <div className="productBrand">
                        <div className="brandName d-flex">
                          <h5>Brand Name</h5>
                          <p className="brandType">Chopper Vegetables</p>
                        </div>
                        <div className="brandColor d-flex">
                          <h5>Color</h5>
                          <div className="brendColorImages">
                            <Image src={product} />
                            <Image src={product} />
                            <Image src={product} />
                          </div>
                        </div>
                      </div>
                      <div className="shippingDetails productBrand">
                        <div className="brandName d-flex">
                          <h5>Shipping to:</h5>
                          <div className="d-flex flex-column">
                            <p className="brandType">
                              Free to Australia via ePacket
                            </p>
                            <p className="brandType deliveryTime">
                              Estimated delivery time 13 - 20 days
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="supplierDetails productBrand">
                        <div className="brandName d-flex">
                          <h5>Supplier</h5>
                          <div className="d-flex flex-column">
                            <p className="brandType">
                              <Link href="#">Genkent Official Store</Link>
                            </p>
                            <p className="brandType text-danger">
                              98.63% positive feedback Open 9 years
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
