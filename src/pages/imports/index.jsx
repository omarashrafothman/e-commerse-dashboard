import TitleHeader from "@/components/titleHeader/TitleHeader";
import Input from "@/components/inputs/Input";
import Product from "@/components/product/Product";
import NavigationFooter from "@/components/navFooter/NavigationFooter";
import products from "../../local-json/products.json";
import { useEffect } from "react";

// edge  start
export const runtime = "experimental-edge"; // 'nodejs' is the default
export const dynamic = "force-dynamic"; // static by default, unless reading the request

export function GET(request) {
  return new Response(`Hello from ${process.env.VERCEL_REGION}`);
}
// edge  end
function index() {
  useEffect(() => {
    document.title = "Imports";
  }, []);
  return (
    <div>
      <div className="main">
        <div className="container3">
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
