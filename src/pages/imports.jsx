import React from "react";
import TitleHeader from "@/components/titleHeader/TitleHeader";
import Input from "@/components/inputs/Input";
import Product from "@/components/product/Product";
import NavigationFooter from "@/components/navFooter/NavigationFooter";

function imports() {
  return (
    <div>
      <div className="main">
        <TitleHeader title={"Imports"} />
        <div className="container1">
          <div className="mainContent ">
            <div className="orderSearchBox d-flex  align-items-center ">
              <Input
                holder={"Search for orders or products"}
                type={"text"}
                classes={"form-control"}
              />
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
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
            </div>
            <NavigationFooter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default imports;
