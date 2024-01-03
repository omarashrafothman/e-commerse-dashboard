import React from "react";
import Image from "next/image";
import product from "../../assets/images/product.png";
import StarRating from "../starRating/StarRating";
import barChart from "../../assets/icons/bar-chart-2.png";
import cart from "../../assets/icons/icons8-aliexpress 1.png";
import bag from "../../assets/icons/Vector.png";
import close from "../../assets/icons/x.png";
import Link from "next/link";

export default function ProductDetails() {
  return (
    <div>
      <div className="main">
        <div className="container1">
          <div className="mainContent ">
            <div className="productDetailsContainer d-flex">
              <div className="productDetailsMedia">
                <div className="bigMediaBox">
                  <Image src={product} />
                </div>
                <div className="d-flex align-items-center justify-content-evenly  my-4">
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
                        <Link href="#">View product statistics</Link>
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
                      <button className="editBtn btn">
                        Edit on import list
                      </button>
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
